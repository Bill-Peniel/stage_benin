import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: ['f6881f8e-2669-497e-a3a4-eff59ebe5111-00-3kwqiedudy6gb.worf.replit.dev', 'localhost', '.replit.dev'],
    cors: {
      origin: '*'
    },
    hmr: {
      clientPort: 443
    }
  }
})