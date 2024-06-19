import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  return {
    base: process.env.VITE_BASE_PATH || '',
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: 9001
    },
    build: {
      minify: 'terser',
      sourcemap: mode === 'development',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          public: resolve(__dirname, 'src/public/public.html')
        }
      }
    }
  }
});

