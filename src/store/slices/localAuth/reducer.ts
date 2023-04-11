import { createReducer, current } from '@reduxjs/toolkit'
import { setAuth, setErrors, setLoading } from './actions'

export interface IUser {
    id: string
    name: string
    email: string
    avatar?: string
    city?: string
    country?: string
    created_at?: string
    updated_at?: string
    timezone?: string
    iat?: number
}
export interface AuthState {
    user: IUser
    isAuthenticated: boolean
    loading: boolean
    errors?: Record<string, unknown> | null
}

const initialState: AuthState = {
    user: {} as IUser,
    isAuthenticated: false,
    loading: false,
    errors: null
}

export const localAuthReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setAuth, (state, { payload }) => {
            state.errors = payload.errors
            state.isAuthenticated = payload.isAuthenticated
            state.loading = payload.loading as boolean
            state.user = payload.user
        })
        .addCase(setErrors, (state, { payload }) => {
            state.errors = payload.errors
        })
        .addCase(setLoading, (state, { payload }) => {
            state.loading = payload.loading as boolean
        })
})
