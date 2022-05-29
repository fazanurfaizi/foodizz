import * as Yup from 'yup';

export class SignInDto {
	constructor(readonly email: string, readonly password: string) {}

	static empty(): SignInDto {
		return new SignInDto('', '');
	}
}

export const SignInSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email'),
	password: Yup.string().min(8, 'Password must be at least 8 characters'),
});
