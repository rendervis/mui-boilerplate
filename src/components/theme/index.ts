import { Theme, createTheme as createMuiTheme } from '@mui/material'
import { createPalette } from './create-palette'
import { createComponents } from './create-components'
import { createShadows } from './create-shadows'
import { createTypography } from './create-typography'
import { ThemeCustom } from './types'
import { neutral } from './colors'

export function createTheme(): Theme {
    const palette = createPalette()
    const components = createComponents({ palette })
    const shadows = createShadows()
    const typography = createTypography()

    const custom: ThemeCustom = {
        gridSpacing: 4,
        drawerWidth: 260,
        appDrawerWidth: 320,
        borderRadius: 12,
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            '& > label': {
                top: 23,
                left: 0,
                color: neutral['500'],
                '&[data-shrink="false"]': {
                    top: 5
                }
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important'
            },
            '& legend': {
                display: 'none'
            },
            '& fieldset': {
                top: 0
            }
        },
        mainContent: {
            backgroundColor: palette.neutral[200],
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: '6px'
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: palette.text.primary,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px'
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: palette.text.secondary,
            textTransform: 'capitalize'
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px'
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem'
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem'
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem'
        }
    }

    return createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1440
            }
        },
        components,
        palette,
        shadows,
        shape: {
            borderRadius: 8
        },
        typography,
        custom
    })
}

declare module '@mui/material/styles' {
    interface ThemeOptions {
        //add custom properties
        custom?: ThemeCustom
    }
    interface Theme {
        // return custom properties
        custom: ThemeCustom
    }
}
