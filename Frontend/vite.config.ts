import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api', // Your server URL
        changeOrigin: true,
        secure: false, // Set to true if the target server uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: removes the /api prefix
      }
    }
  },
  plugins: [react()],
})
