import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: "index",
      name: 'button',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});