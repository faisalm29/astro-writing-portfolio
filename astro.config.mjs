// @ts-check
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    pagefind(),
    icon(),
    mdx(),
    tailwind({
      nesting: true,
    }),
  ],
  image: {
    domains: ["insanbumimandiri.org", "ik.imagekit.io"],
    remotePatterns: [{ protocol: "https" }],
  },
  experimental: {
    responsiveImages: true,
  },
});
