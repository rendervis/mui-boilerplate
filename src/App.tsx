import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

// third party
import { Provider } from 'react-redux'

// project imports
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from '@src/utils/routes'

// defaultTheme
import { createTheme } from '@components/theme'

export default function App() {
    const theme = createTheme()

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Routes />
                    </ThemeProvider>
                </StyledEngineProvider>
            </PersistGate>
        </Provider>
    )
}
