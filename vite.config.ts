import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: '/card-shine-qr/',
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
