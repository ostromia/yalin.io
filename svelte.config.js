import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        scss: {}
    }),

    kit: {
        adapter: adapter(),
        alias: {
            $r: path.resolve('src/routes'),
            $index: path.resolve('src/routes/(index)'),
            $articles: path.resolve("src/routes/articles"),
			$zygon: path.resolve('src/routes/zygon')
        }
    }
};

export default config;
