import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],


  base: '/weather/',
	build: {
		outDir: './docs',
	},
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }

  
})
