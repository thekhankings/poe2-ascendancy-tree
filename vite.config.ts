import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // Ensure relative paths for assets
  build: {
    outDir: 'dist',  // This is the output folder for the build
    assetsDir: 'assets',  // Folder for static assets
  },
});
