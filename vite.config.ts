import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  assetsInclude: ["**/*.zip"],
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    output: {
      dir: ".vercel/output",
    },
  },
});
