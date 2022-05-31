import { SignUpDto } from "@dto/auth/SignUpDto";

export class AuthService {

	static signUp(request: SignUpDto) {
		try {
			const user = {
				id: '2af03f8e-0cc7-4de7-aad9-3e251957134b',
				username: request.username,
				email: request.email,				
			}

			return user
		} catch (error) {
			console.error('SignUp - Error: ', error)
			throw error
		}
	}

}
