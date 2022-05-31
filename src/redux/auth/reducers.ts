import { createReducer } from '@reduxjs/toolkit'
import {
	SignUpRequest, SignUpSuccess, SignUpFailed
} from './actions'

export interface IAuthState {
	loading: boolean;
	isAuthenticated: boolean;
	user: {
		id?: string;
		username: string;
		email: string;
	}|null
}

const initialState: IAuthState = {
	loading: false,
	isAuthenticated: false,
	user: null
}

export const authReducer = createReducer(initialState, {
	[SignUpRequest.type]: state => {
		state.loading = true;
		state.isAuthenticated = false;
		state.user = null
	},
	[SignUpSuccess.type]: (state, action) => {
		state.loading = false;
		state.isAuthenticated = true;
		state.user = action.payload
	},
	[SignUpFailed.type]: state => {
		state.loading = true;
		state.isAuthenticated = false;
		state.user = null
	}
})
