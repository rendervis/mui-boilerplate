import { createReducer, current } from '@reduxjs/toolkit'
import { setMenu, menuOpen } from './actions'

export interface MenuState {
    isOpen: Array<string>
    id: string
    opened: boolean
}

export const initialState: MenuState = {
    isOpen: [], // for active default menu
    id: 'default',
    opened: true
}

export const menuReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setMenu, (state, { payload }) => {
            state.opened = payload.opened
        })
        .addCase(menuOpen, (state, { payload }) => {
            const id = payload.id || ''
            state.isOpen = [id]
        })
})
