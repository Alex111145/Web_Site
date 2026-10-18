import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/", // Cloudflare Pages: sito servito dalla radice del dominio
  plugins: [react(), tailwindcss()],
})
