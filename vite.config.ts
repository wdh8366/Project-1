import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss'; //추가
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //css 추가
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});