import { createAction } from '@reduxjs/toolkit'
import { SignUpRequestPayload, SignUpSuccessPayload } from './types'

export const SignUpRequest = createAction<SignUpRequestPayload>('SIGN_UP_REQUEST');
export const SignUpSuccess = createAction<SignUpSuccessPayload>('SIGN_UP_SUCCESS');
export const SignUpFailed = createAction('SIGN_UP_FAILED');
