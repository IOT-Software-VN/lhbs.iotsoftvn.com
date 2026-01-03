import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
  css: {
    devSourcemap: true
  },
  server: {
    port: 9000
  },
  preview: {
    port: 9000
  },
  plugins: [reactRouter(), tailwindcss(), devtoolsJson()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app')
    }
  }
})
