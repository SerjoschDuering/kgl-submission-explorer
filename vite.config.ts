import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to repository name for GitHub Pages
  // Replace 'kgl-submission-explorer' with your actual repo name
  base: '/kgl-submission-explorer/',
})
