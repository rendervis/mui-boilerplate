import { AuthState } from './reducer'

export const selectAuth = (state: AuthState) => state
export const selectUserLoading = (state: AuthState) => state.loading
export const selectAuthErrors = (state: AuthState) => state.errors
export const selectIsAuthenticated= (state: AuthState) => state.isAuthenticated
