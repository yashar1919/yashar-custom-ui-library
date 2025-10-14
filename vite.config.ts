import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "library") {
    return {
      plugins: [react()],
      build: {
        emptyOutDir: false, // Don't clear the outDir so TypeScript declarations are preserved
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "YasharUI",
          formats: ["es", "umd"],
          fileName: (format) =>
            `yashar-ui.${format === "es" ? "js" : "umd.cjs"}`,
        },
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  }

  // Default development config
  return {
    plugins: [react()],
  };
});
