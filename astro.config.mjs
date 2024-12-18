// @ts-check
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  integrations: [pagefind()],
  image: {
    domains: ["insanbumimandiri.org"],
    remotePatterns: [{ protocol: "https" }],
  },
});
