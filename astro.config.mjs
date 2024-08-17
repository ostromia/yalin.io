import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://yalin.io',
	integrations: [
        mdx(),
        sitemap(),
        react(),
        svelte()
    ],
});
