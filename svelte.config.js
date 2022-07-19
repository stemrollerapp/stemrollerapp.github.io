import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
	kit: {
		alias: {
			$components: 'src/components',
			$icons: 'src/icons',
			$utils: 'src/utils',
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		prerender: {
			default: true,
		},
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
}

export default config
