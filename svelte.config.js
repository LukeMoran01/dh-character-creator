import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const repo = 'dh-character-creator';

const config = {
	preprocess: vitePreprocess(),
	kit: { adapter: adapter({fallback: '404.html'}) },
	paths: {
		base: dev ? '' : `/${repo}`  // GitHub Pages serves from /<repo>
	}
};

export default config;
