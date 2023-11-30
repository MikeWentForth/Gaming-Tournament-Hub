import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
