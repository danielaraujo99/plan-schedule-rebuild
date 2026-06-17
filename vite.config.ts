import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    compatibilityDate: "2026-06-17",
    output: {
      dir: ".vercel/output",
    },
  },
});
