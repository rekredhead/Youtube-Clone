import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Youtube-Clone/', // Base URL of Website
  plugins: [react()],
})
