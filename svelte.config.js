import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // https://kit.svelte.dev/docs/integrations#preprocessors
    // preprocess: vitePreprocess(),
    preprocess: preprocess({
        scss: {
            prependData: `@import './src/app.scss';`
        }
    }),

    kit: {
        adapter: adapter()
    }
};

export default config;
