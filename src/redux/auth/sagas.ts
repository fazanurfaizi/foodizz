import { PayloadAction } from '@reduxjs/toolkit';
import { AuthService } from '@services/auth.service';
import { call, CallEffect, ForkEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import {
	SignUpRequest, SignUpSuccess, SignUpFailed
} from './actions'
import { SignUpRequestPayload, SignUpSuccessPayload } from './types';

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

function* authSaga(): Generator<ForkEffect<never>, void> {
	yield takeLatest(SignUpRequest.type, signUpSaga);
}

export default authSaga
