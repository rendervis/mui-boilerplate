import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import localAuth from '@src/services/localAuth'

// third party
import jwtDecode from 'jwt-decode'

// project imports
import api from '@src/services/api'
import { AuthState, IUser } from './reducer'
import { IFormData } from '@components/views/auth/components/AuthLogin'
import { AppDispatch } from '@store/index'

export const setAuth = createAction<AuthState>('localAuth/setAuth')
export const setLoading = createAction<Partial<AuthState>>('localAuth/setLoading')
export const setErrors = createAction<Partial<AuthState>>('localAuth/setErrors')

export const loginUser = createAsyncThunk<
    void,
    { formData: IFormData },
    {
        dispatch: AppDispatch
        rejectWithValue: any
    }
>('localAuth/loginUser', async ({ formData }, { rejectWithValue, dispatch }) => {
    try {
        dispatch(setLoading({ loading: true }))
        const token: string = await localAuth.login(formData)

        localStorage.setItem('token', token)

        // Set Authorization header
        api.setAuthToken(token)

        // Decode token to get user data
        const user = jwtDecode(token) as IUser

        // Set auth
        dispatch(setAuth({ user, isAuthenticated: true, loading: false, errors: null }))

        window.location.href = '/'
    } catch (err: any) {
        dispatch(setErrors({ errors: err }))
        return rejectWithValue((err as any).response?.data?.error.data || null)
    }
})

export const signUpUser = createAsyncThunk<void, { formData: any }, { rejectValue: Record<string, unknown> }>(
    'localAuth/signUpUser',
    async ({ formData }, { rejectWithValue, dispatch }) => {
        try {
            dispatch(setLoading({ loading: true }))
            const token: string = await localAuth.signup(formData)

            localStorage.setItem('token', token)

            // Set Authorization header
            api.setAuthToken(token)
            // Decode token to get user data
            const decoded = jwtDecode(token) as IUser

            // Set auth
            dispatch(setAuth({ user: decoded, isAuthenticated: true, loading: false, errors: null }))

            window.location.href = '/'
        } catch (err: any) {
            dispatch(setErrors({ errors: err }))
            return rejectWithValue((err as any).response?.data?.error.data || null)
        }
    }
)

export const logoutUser = createAsyncThunk<void, never, any>('localAuth/logoutUser', async (_, { dispatch }) => {
    try {
        // Remove token from local storage
        localStorage.removeItem('token')

        // Remove Authorization header
        api.setAuthToken(false)

        // Clear auth
        dispatch(setAuth({ user: {} as IUser, isAuthenticated: false, loading: false, errors: null }))
        window.location.href = '/login'
    } catch (err: any) {
        dispatch(setErrors({ errors: err }))
        console.error('logoutUser::err', err)
    }
})

export const forgotUserData = createAsyncThunk<void, { formData: any }, any>(
    'localAuth/forgotUserData',
    async ({ formData }, { dispatch }) => {
        try {
            await localAuth.forgot(formData)
        } catch (err: any) {
            dispatch(setErrors({ errors: err }))
            console.error('forgotUserData::err', err)
        }
    }
)

export const resetUserData = createAsyncThunk<void, { formData: any }, any>(
    'localAuth/resetUserData',
    async ({ formData }, { dispatch }) => {
        try {
            await localAuth.reset(formData)
        } catch (err: any) {
            dispatch(setErrors({ errors: err }))
            console.error('resetUserData::err', err)
        }
    }
)
