import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://TEEGardenb.github.io/space-tourism-website",
  server: {
    host: "0.0.0.0",
  },
});
