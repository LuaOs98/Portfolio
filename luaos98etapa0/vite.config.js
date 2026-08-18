import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base './' keeps asset URLs relative so the built site works both at a
// domain root and under a subpath (e.g. GitHub Pages project pages).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist', assetsDir: 'assets' },
});
