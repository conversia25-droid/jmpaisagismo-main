import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexFile = join(distDir, "index.html");
const routes = ["servicos", "portfolio", "sobre", "contato", "obrigado"];

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(distDir, route);
    await mkdir(routeDir, { recursive: true });
    await copyFile(indexFile, join(routeDir, "index.html"));
  }),
);

console.log(`Created static fallbacks for: ${routes.map((route) => `/${route}`).join(", ")}`);
