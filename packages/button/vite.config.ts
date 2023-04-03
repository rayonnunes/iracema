import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: 'es2015',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
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
      plugins: [
        typescript({
          declaration: true,
          declarationDir: './dist/types',
          rootDir: 'src',
          exclude: ['**/__tests__/*', '**/*.test.ts', '**/*.test.tsx']
        })
      ]
    },
  },
});