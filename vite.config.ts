import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    assetsInclude: ["**/*.zip"],
  },
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
