import env from '@env';
import axiosFactory, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'

const instance = (axios: AxiosInstance): AxiosInstance => {	
	axios.interceptors.request.use(
		(config: AxiosRequestConfig) => {
			config.baseURL = env.API_URL
			config.headers = {
				'Authorization': `Bearer 1234`,
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}
	)

	axios.interceptors.response.use(
		(v) => Promise.resolve(v),
		(error: AxiosError) => {
			if(!error.config) {
				console.error('Received network error without axios details', error)
				return Promise.reject(error)
			}

			if(
				error.response &&
				(
					error.response.status == 400 ||
					error.response.status == 401 ||
					error.response.status == 403
				)
			) {
				console.debug('Network request failed but this is OK', {
					config: error.config,
					error
				})

				return Promise.reject(error)
			}

			if(
				error.response &&
        		(error.response.status >= 404 || error.response.status < 500)
			) {
				// 4xx status means we should not retry.
				console.error('Network request failed', { config: error.config, error })
				return Promise.reject(error)
			}

			const config = {
				...error.config,
				timeout: 1000,				
			}

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					axios.request(config).then(resolve).catch(reject)
				}, 1000)
			})
		}
	)

	return axios;
}

/**
 * 
 * @param {import("axios").AxiosInstance} axios 
 * @param {RetryWrapperType} options 
 * @param {number} options.retryTime
 * @param {number} options.retry_status_code
 */
const retryWrapper = (axios: AxiosInstance, options: RetryWrapperType): AxiosInstance => {
	const maxTime = options.retryTime;
	const retryStatusCode = options.retryStatusCode;
	let counter = 0;

	axios.interceptors.response.use(
		(v) => Promise.resolve(v), 
		(error: AxiosError) => {
			console.log(`Counter: ${counter}`);
        	console.log("Error: ", error.response?.status);

			const config = error.config
			if(counter < maxTime && error.response?.status === retryStatusCode) {
				counter++
				return new Promise((resolve) => resolve(axios(config)))
			}

			if (counter > maxTime) {
				const err = new Error(
				  'Unable to reach network, gave up after max attempts. Please restart the app and try again.'
				)
				console.error(err, { config: error.config, error })
				return Promise.reject(err)
			}		

			console.debug('Retrying due to network error', {
				count: counter,
				error
			})	

			if (counter === maxTime && error.response?.status === retryStatusCode) {				
				return new Promise((resolve) => resolve(axios(config)))
			}
			return Promise.reject(error)
		}
	)

	return axios;
}

type RetryWrapperType = {
	retryTime: number;
	retryStatusCode: number;
}

export const api: AxiosInstance = retryWrapper(instance(axiosFactory.create()), {
	retryTime: 3,
	retryStatusCode: 404
})
