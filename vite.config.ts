import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      webp: { lossless: false, quality: 75 },
      avif: { lossless: false, quality: 60 },
      includePublic: true,
      logStats: true,
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  preview: {
    allowedHosts: ["sezdev.com", "localhost", "127.0.0.1"],
  },
});
