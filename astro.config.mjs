import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import remarkCollapse from "remark-collapse";
import astroRemark from "@astrojs/markdown-remark";
import rehypeExternalLinks from "rehype-external-links";

import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://eriko.dev",
  integrations: [tailwind(), sitemap(), preact(), mdx()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkToc],
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
  },
});
