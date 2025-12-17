import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'client',          // AVISA: "O site está aqui dentro"
  build: {
    outDir: '../dist',     // AVISA: "Guarde o site pronto na pasta principal"
    emptyOutDir: true,
  }
})
