import * as Yup from 'yup';

export class SignUpDto {
	constructor(readonly email: string, readonly username: string, readonly password: string) {}

	static empty(): SignUpDto {
		return new SignUpDto('', '', '');
	}
}

export const SignUpSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email'),
	username: Yup.string().min(2, 'Username must be at least 2 characters'),
	password: Yup.string().min(8, 'Password must be at least 8 characters'),
});
