import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      serverDir: "dist/_server",
      publicDir: "dist/_public",
    },
    cloudflare: { nodeCompat: true, deployConfig: true },
  },
});
