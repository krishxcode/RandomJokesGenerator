import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Backend server URL
        changeOrigin: true, // Adjusts the `Origin` header of the request to match the target
        secure: false, // Disable if you're using a self-signed certificate for HTTPS
      },
      "/jokes": {
        target: "http://localhost:3000", // Forward requests starting with /jokes
        changeOrigin: true,
      },
    },
  },
});
