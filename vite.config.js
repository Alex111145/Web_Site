import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/Web_Site/", // Questo deve corrispondere al nome del repository
  plugins: [react(), tailwindcss()],
})