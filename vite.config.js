import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',  // Correct base path for deployment
  build: {
    outDir: 'dist',  // Ensure the output directory is correct
  },
});