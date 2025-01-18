import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory
    rollupOptions: {
      input: {
        popup: 'index.html',  // Main entry point for the popup
        background: 'public/background.js',
        content: 'public/contentScript.js',
      },
    },
  },
});
