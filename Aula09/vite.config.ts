import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// O caminho relativo permite publicar tanto na raiz quanto em um repositório do GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
