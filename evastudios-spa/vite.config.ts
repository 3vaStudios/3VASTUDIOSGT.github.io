import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/3VASTUDIOSGT.github.io/",
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
