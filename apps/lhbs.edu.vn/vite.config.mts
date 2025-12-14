/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/lhbs.edu.vn',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'app'),
      '~': path.resolve(import.meta.dirname, 'app/components/ui'),
      '@assets': path.resolve(import.meta.dirname, 'assets'),
      '@sites': path.resolve(import.meta.dirname, '../../libs/src'),
    },
  },
  plugins: [!process.env.VITEST && reactRouter(), tailwindcss()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    name: 'lhbs.edu.vn',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
