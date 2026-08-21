import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",         // listen on all addresses
    port: 3002,              // or your port
    allowedHosts: [
      "vaptlabs.com",        // ✅ add your domain here
      "www.vaptlabs.com"     // (optional) if you also serve www
    ]
  }
});

