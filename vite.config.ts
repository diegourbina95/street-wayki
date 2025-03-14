import * as path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  base: "/street-wayki/",
  /*  base: "/especiales/street-wayki-patrimonio-politicos-peru/", */
});
