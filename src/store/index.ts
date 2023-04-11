import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { useDispatch } from 'react-redux'
import {  AnyAction } from 'redux';

import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk,{ ThunkAction, ThunkDispatch } from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)




export type AppDispatch = typeof store.dispatch

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

//fix for: Argument of type 'ThunkAction<void, CombinedState<...>>' is not assignable to parameter of type 'AnyAction'.

export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const useAppDispatch: () => TypedDispatch = useDispatch

export default store
