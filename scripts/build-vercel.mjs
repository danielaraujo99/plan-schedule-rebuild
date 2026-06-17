import { existsSync, cpSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";

const env = {
  ...process.env,
  NITRO_PRESET: "vercel",
};

delete env.LOVABLE_SANDBOX;
delete env.DEV_SERVER__PROJECT_PATH;

for (const path of [".vercel/output", "output", ".output", "dist", "node_modules/.nitro"]) {
  rmSync(path, { recursive: true, force: true });
}

const result = spawnSync("vite", ["build"], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env,
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (!existsSync(".vercel/output/config.json")) {
  throw new Error("Build da Vercel não gerou .vercel/output/config.json.");
}

rmSync("output", { recursive: true, force: true });
cpSync(".vercel/output", "output", { recursive: true });
