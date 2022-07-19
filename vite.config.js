import { sveltekit } from '@sveltejs/kit/vite'

const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['./static/'],
		},
	},
}

export default config
