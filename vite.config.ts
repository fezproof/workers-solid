import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    ssr: true,
    server: {
      preset: "cloudflare_module",
      rollupConfig: {
        external: [
          "__STATIC_CONTENT_MANIFEST",
          "node:async_hooks",
          "node:stream",
        ],
      },
      minify: false,
    },
  },
});
