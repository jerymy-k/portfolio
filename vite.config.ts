import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Relative base: the built site works from any folder (GitHub Pages project
// site, custom domain or a plain static host) without changing this file.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
