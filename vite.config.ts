import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/agendamento", "/baixar"],
      failOnError: false,
    },
    output: {
      dir: "dist",
      publicDir: "dist",
    },
  },
});
