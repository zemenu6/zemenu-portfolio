import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use a relative base so built assets work on Netlify and GitHub Pages
  base: './',
  plugins: [react()],
})
