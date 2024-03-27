import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/spa-demo/'
  plugins: [
    remix({
      basename: '/spa-demo/',
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
