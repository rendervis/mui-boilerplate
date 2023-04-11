import { createRoot } from 'react-dom/client'

// third party
import { BrowserRouter } from 'react-router-dom'


// project imports
import App from './App'
import config from './config'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <BrowserRouter basename={config.basename}>
        <App />
    </BrowserRouter>
)
