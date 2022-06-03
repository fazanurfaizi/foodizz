export type SignUpRequestPayload = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

export type SignUpSuccessPayload = {
	message: string;
}

export type SignInRequestPayload = {
	email: string;
	password: string;
}

export type SignInSuccessPayload = {
	accessToken: string;
	tokenType: string;
	user: {
		id: string;
		name: string;
		username: string;
		email: string;
	}
}
