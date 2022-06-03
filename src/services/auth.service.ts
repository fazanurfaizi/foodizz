import { SignInDto } from "@dto/auth/SignInDto";
import { SignUpDto } from "@dto/auth/SignUpDto";
import { api } from "@utils/api";
import { AxiosError, AxiosResponse } from "axios";

export const signIn = (request: SignInDto): Promise<AxiosResponse|AxiosError> => {
	return new Promise(async (resolve, reject) => {
		await api.post('/auth/login', request)
			.then((response: AxiosResponse) => resolve(response))
			.catch((error: AxiosError) => reject(error))
	})
}
