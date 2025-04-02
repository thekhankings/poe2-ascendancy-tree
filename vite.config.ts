import { defineConfig } from 'vite';

export default defineConfig({
  base: '/poe2-ascendancy-tree/',
  build: {
    outDir: 'dist',  // This is the output folder for the build
    assetsDir: 'assets',  // Folder for static assets
  },
});
