import type { RootState } from '@redux/reducers'
import { createSelector } from '@reduxjs/toolkit'

const authSelector = (state: RootState) => state.auth

export const authLoading = createSelector(authSelector, state => state.loading)
export const isAuthenticated = createSelector(authSelector, state => state.isAuthenticated)
export const authUser = createSelector(authSelector, state => state.user)
