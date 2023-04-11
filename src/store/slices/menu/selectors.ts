import { RootState } from '@store/index'

export const selectId = (state: RootState) => state.menu.id
export const selectIsOpen = (state: RootState) => state.menu.isOpen
export const selectOpened = (state: RootState) => state.menu.opened
