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
    strictPort: true,
    https: false,
    open: true,
    proxy: {},
    cors: true,
    hmr: {
      host: '0.0.0.0',
      port: 5000,
      protocol: 'ws'
    }
  }
})