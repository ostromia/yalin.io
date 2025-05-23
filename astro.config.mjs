import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
    site: "https://yalin.io",
    integrations: [mdx(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: "github-dark",
            wrap: false
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    },
    vite: {
        resolve: {
            alias: {
                "@src": "/src",
                "@assets": "/src/assets",
                "@components": "/src/components",
                "@content": "/src/content",
                "@layouts": "/src/layouts",
                "@pages": "/src/pages",
                "@styles": "/src/styles"
            }
        }
    }
});
