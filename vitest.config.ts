import path from 'path'
import { defineConfig } from 'vitest/config'
import { createVitestFailureReporter } from '../scripts/test-reporters/vitest-failure-reporter'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup/vitest.setup.ts'],
    globals: true,
    css: true,
    reporters: ['default', createVitestFailureReporter()],
  },
})
