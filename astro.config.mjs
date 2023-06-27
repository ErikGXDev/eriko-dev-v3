import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://eriko.dev",
  integrations: [tailwind(), sitemap(), preact(), mdx()]
});