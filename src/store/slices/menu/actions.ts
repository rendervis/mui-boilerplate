import { createAction } from '@reduxjs/toolkit';
import { MenuState } from './reducer';

export const setMenu = createAction<Pick<MenuState,'opened'>>('menu/setMenu');
export const menuToggle = createAction<Partial<MenuState>>('menu/menuToggle');
export const menuOpen = createAction<Partial<MenuState>>('menu/menuOpen');
