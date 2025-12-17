/// <reference types='vitest' />
import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/apps/school.lhbs.edu.vn',
  server: {
    port: 4201,
    host: 'localhost',
  },
  preview: {
    port: 4201,
    host: 'localhost',
  },
  plugins: [!process.env.VITEST && reactRouter(), tailwindcss()],
    resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'app'),
      '~': path.resolve(import.meta.dirname, 'app/components/ui'),
      '@assets': path.resolve(import.meta.dirname, 'assets'),
      '@sites': path.resolve(import.meta.dirname, '../../libs/src'),
    },
  },
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
    name: 'school.lhbs.edu.vn',
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
