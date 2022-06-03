import { AppRoute } from '@navigation/app.routes';
import { PayloadAction } from '@reduxjs/toolkit';
import { signIn } from '@services/auth.service';
import { navigate } from '@utils/navigationUtils';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import {
	SignUpRequest, SignUpSuccess, SignUpFailed, SignInFailed, SignInRequest, SignInSuccess
} from './actions'
import { SignInRequestPayload, SignInSuccessPayload, SignUpRequestPayload, SignUpSuccessPayload } from './types';

function* signUpSaga({ payload }: PayloadAction<SignUpSuccessPayload>): Generator<
	| CallEffect
	| PutEffect<{
		payload: SignUpSuccessPayload|undefined;
		type: string
	}>, void
> {	
	try {		
		const res = {
			message: payload.message
		}

		yield put(SignUpSuccess(res));
	} catch (error) {
		yield put(SignUpFailed())
	}
}

function* signInSaga({ payload }: PayloadAction<SignInRequestPayload>): Generator<
	| CallEffect
	| PutEffect<{
		payload: SignInSuccessPayload|undefined;
		type: string
	}>, void
> {
	try {
		// const request = yield call(signIn, payload);

		console.log(payload)

		const response = {
			accessToken: 'string',
			tokenType: 'string',
			user: {
				id: 'string',
				name: 'string',
				username: 'string',
				email: 'string',
			}
		}

		yield put(SignInSuccess(response))

		navigate(AppRoute.HOME)
	} catch (error) {
		yield put(SignInFailed());
	}
}

function* authSaga(): Generator<ForkEffect<never>, void> {
	yield takeLatest(SignUpRequest.type, signUpSaga);
	yield takeLatest(SignInRequest.type, signInSaga);
}

export default authSaga
