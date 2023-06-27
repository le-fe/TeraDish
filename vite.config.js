import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/base/_variables.scss";`,
      },
    },
  },
  resolve: {
    extensions: [".vue", ".js", ".json", ".ts"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
