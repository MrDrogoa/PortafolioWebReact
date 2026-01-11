import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { copyFileSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Plugin para copiar .htaccess al build
const copyHtaccess = {
  name: "copy-htaccess",
  closeBundle() {
    const src = path.resolve(__dirname, ".htaccess");
    const dest = path.resolve(__dirname, "dist/.htaccess");
    try {
      copyFileSync(src, dest);
      console.log("✅ .htaccess copiado a dist/");
    } catch (error) {
      console.error("⚠️  Error copiando .htaccess:", error.message);
    }
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyHtaccess],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
