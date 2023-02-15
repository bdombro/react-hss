/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: ['**/(esm|cjs|node_modules)/**'],
    globals: true,
  },
})
