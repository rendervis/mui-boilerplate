import { alpha } from '@mui/material/styles'
import { Color, error, indigo, info, neutral, success, orange } from './colors'

export interface Palette {
    action: {
        active: string
        disabled: string
        disabledBackground: string
        focus: string
        hover: string
        selected: string
    }
    background: {
        default: string
        paper: string
    }
    divider: string
    error: Color
    info: Color
    mode: 'light' | 'dark'
    neutral: typeof neutral
    primary: Color
    success: Color
    text: {
        primary: string
        secondary: string
        disabled: string
    }
    orange: Color
}

export function createPalette(): Palette {
    return {
        action: {
            active: neutral[500],
            disabled: alpha(neutral[900], 0.38),
            disabledBackground: alpha(neutral[900], 0.12),
            focus: alpha(neutral[900], 0.16),
            hover: alpha(neutral[900], 0.04),
            selected: alpha(neutral[900], 0.12)
        },
        background: {
            default: neutral[50],
            paper: neutral[100]
        },
        divider: '#F2F4F7',
        error,
        info,
        mode: 'light',
        neutral,
        primary: indigo,
        success,
        text: {
            primary: neutral[900],
            secondary: neutral[500],
            disabled: alpha(neutral[900], 0.38)
        },
        orange
    }
}
