import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkAttributes from "remark-attributes";

// https://astro.build/config
export default defineConfig({
    site: "https://yalin.io",

    integrations: [mdx(), sitemap()],

    markdown: {
        shikiConfig: {
            theme: "github-dark",
            wrap: false
        },

        remarkPlugins: [remarkMath, remarkAlert, remarkAttributes],
        rehypePlugins: [rehypeKatex]
    },

    vite: {
        resolve: {
            alias: {
                "~assets": "/src/assets",
                "~components": "/src/components",
                "~content": "/src/content",
                "~layouts": "/src/layouts",
                "~pages": "/src/pages",
                "~scripts": "/src/scripts",
                "~styles": "/src/styles"
            }
        }
    },

    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Atkinson Hyperlegible",
            cssVariable: "--font-atkinson-hyperlegible",
            fallbacks: ["system-ui"]
        },
        {
            provider: fontProviders.fontsource(),
            name: "Ubuntu Sans Mono",
            cssVariable: "--font-ubuntu-sans-mono",
            fallbacks: ["monospace"]
        }
    ]
});
