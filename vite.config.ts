import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages serves this project from https://<user>.github.io/Denisse-Portfolio/,
  // so built asset URLs must be prefixed with the repository name.
  base: mode === 'production' ? '/Denisse-Portfolio/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Performance optimizations
    rollupOptions: {
      output: {
        // Code splitting for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          domegallery: ['@use-gesture/react'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Reduce bundle size with esbuild (faster than terser)
    minify: 'esbuild',
    target: 'es2015',
  },
  // Enable CSS inlining for critical styles
  css: {
    devSourcemap: false,
  },
}))
