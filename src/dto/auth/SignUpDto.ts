import * as Yup from 'yup';

export class SignUpDto {
	constructor(
		readonly email: string, 
		readonly username: string, 
		readonly password: string,
		readonly passwordConfirmation: string,
	) {}

	static empty(): SignUpDto {
		return new SignUpDto('', '', '', '');
	}
}

export const SignUpSchema = Yup.object().shape({
	username: Yup.string()
        .required('Username is required')
        .label('Username'),
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
        .label('Password'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
