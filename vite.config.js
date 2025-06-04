

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/https://github.com/codelover2025/Portfolio/", // replace with your GitHub repo name
  plugins: [react()],
})
