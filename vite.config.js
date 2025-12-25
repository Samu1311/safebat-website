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
        technology: resolve(__dirname, "technology.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        investors: resolve(__dirname, "investors.html"),
        faq: resolve(__dirname, "faq.html"),     
        error404: resolve(__dirname, "404.html")
      }
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@scripts": resolve(__dirname, "src/scripts"),
      "@styles": resolve(__dirname, "src/styles"),
      "@assets": resolve(__dirname, "src/assets")
    }
  }
});