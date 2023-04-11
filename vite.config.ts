import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],

    define: {
        // Define environment variables that should be exposed to the code
        'process.env.VITE_BASE_URL': JSON.stringify(process.env.VITE_API_BASE_URL),
        'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
      },

})
