import * as Yup from 'yup';

export class SignInDto {
	constructor(readonly email: string, readonly password: string) {}

	static empty(): SignInDto {
		return new SignInDto('', '');
	}
}

export const SignInSchema = Yup.object().shape({
	email: Yup.string()
        .required('Email is required')
        .email('Please enter valid email')
        .label('Email'),
	password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password')
});
