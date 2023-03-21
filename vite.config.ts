import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Iracema",
      fileName: (format) => `iracema.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize all dependencies
      // to reduce bundle size
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized dependencies
        globals: {
          react: "React",
        },
      },
    },
  },
});