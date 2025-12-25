// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        solutions: resolve(__dirname, "solutions.html"),
        products: resolve(__dirname, "technology.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        investors: resolve(__dirname, "investors.html")
      }
    },
    outDir: "dist",
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@scripts": resolve(__dirname, "src/scripts"),
      "@styles": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets")
    }
  }
});
