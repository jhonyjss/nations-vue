import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@utils': resolve('src/utils'),
      '@layouts': resolve('src/layouts'),
      '@pages': resolve('src/pages'),
      '@components': resolve('src/components'),
      '@composables': resolve('src/composables'),
      '@stores': resolve('src/stores'),
      '@services': resolve('src/services'),
      '@interfaces': resolve('src/interfaces'),
    }
  },
})
