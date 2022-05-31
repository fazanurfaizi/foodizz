export type SignUpRequestPayload = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

export type SignUpSuccessPayload = {
	message: string;
}
