import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.js'),
      name: 'my-lib'
    },
    rollupOptions: {
      external: ['vue', 'socket.io-client']
    }
  }
});
