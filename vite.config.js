import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://imlookingfor.github.io/JazzinPrison/
export default defineConfig({
  plugins: [react()],
  base: '/JazzinPrison/',
})
