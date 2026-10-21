import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: "https://task-tracker-backend-0tp6.onrender.com",
        changeOrigin: true,
      },
    },
  },
})
