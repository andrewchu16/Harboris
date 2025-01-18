// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // We want a single bundle for the content script
    rollupOptions: {
      input: {
        contentScript: "src/contentScript.jsx", // our entry
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist", // output folder
    emptyOutDir: false, // to avoid wiping out once we build multiple times
  },
});
