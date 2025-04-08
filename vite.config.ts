import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/andrey-hauryk-web-cv/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src', // Путь для алиаса
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
})
