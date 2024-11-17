import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://diegourbina95.github.io/street-wayki/",
  plugins: [react()],
});
