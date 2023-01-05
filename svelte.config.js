import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/styles.scss';`
		}
	}),

	kit: {
		adapter: adapter({
            pages: 'build',
            assests: 'build',
            fallback: null,
            precompress: false,
            strict: true
        })
	}
};

export default config;
