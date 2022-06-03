import { createAction } from '@reduxjs/toolkit'
import { SignInRequestPayload, SignInSuccessPayload, SignUpRequestPayload, SignUpSuccessPayload } from './types'

export const SignUpRequest = createAction<SignUpRequestPayload>('SIGN_UP_REQUEST');
export const SignUpSuccess = createAction<SignUpSuccessPayload>('SIGN_UP_SUCCESS');
export const SignUpFailed = createAction('SIGN_UP_FAILED');

export const SignInRequest = createAction<SignInRequestPayload>('SIGN_IN_REQUEST');
export const SignInSuccess = createAction<SignInSuccessPayload>('SIGN_IN_SUCCESS');
export const SignInFailed = createAction('SIGN_IN_FAILED');
