import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Fix base path for proper routing
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
});
