import { combineReducers } from '@reduxjs/toolkit'
import { localAuthReducer } from './slices/localAuth/reducer'
import { menuReducer } from './slices/menu/reducer'

const rootReducer = combineReducers({
    localAuth: localAuthReducer,
    menu: menuReducer
})

export default rootReducer
