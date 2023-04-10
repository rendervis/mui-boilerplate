import { alpha } from '@mui/material/styles'

export interface Color {
    lightest: string
    light: string
    main: string
    dark: string
    darkest: string
    contrastText: string
}

const withAlphas = (color: Color) => {
    return {
        ...color,
        alpha4: alpha(color.main, 0.04),
        alpha8: alpha(color.main, 0.08),
        alpha12: alpha(color.main, 0.12),
        alpha30: alpha(color.main, 0.3),
        alpha50: alpha(color.main, 0.5)
    }
}

export const neutral = {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b'
} as const

export const indigo = withAlphas({
    lightest: '#F5F7FF',
    light: '#EBEEFE',
    main: '#6366F1',
    dark: '#4338CA',
    darkest: '#312E81',
    contrastText: '#FFFFFF'
})

export const success = withAlphas({
    lightest: '#F0FDF9',
    light: '#3FC79A',
    main: '#10B981',
    dark: '#0B815A',
    darkest: '#134E48',
    contrastText: '#FFFFFF'
})

export const info = withAlphas({
    lightest: '#ECFDFF',
    light: '#CFF9FE',
    main: '#06AED4',
    dark: '#0E7090',
    darkest: '#164C63',
    contrastText: '#FFFFFF'
})

export const orange = withAlphas({
    lightest: '#FFFAEB',
    light: '#FEF0C7',
    main: '#F79009',
    dark: '#B54708',
    darkest: '#7A2E0E',
    contrastText: '#FFFFFF'
})

export const error = withAlphas({
    lightest: '#FEF3F2',
    light: '#FEE4E2',
    main: '#F04438',
    dark: '#B42318',
    darkest: '#7A271A',
    contrastText: '#FFFFFF'
})
