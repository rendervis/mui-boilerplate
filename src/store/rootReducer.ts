import { combineReducers } from "@reduxjs/toolkit"
import { adminReducer } from "./slices/admin/reducer"
import { menuReducer } from "./slices/menu/reducer"

const rootReducer = combineReducers({
  admin: adminReducer,
  menu: menuReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
