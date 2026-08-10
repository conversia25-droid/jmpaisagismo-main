import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { componentTagger } from "lovable-tagger";

const pagesBase = process.env.GITHUB_PAGES_BASE?.trim() || "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: pagesBase,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));