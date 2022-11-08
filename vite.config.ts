import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from "path";

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve("src/components"),
			$types: path.resolve("src/types"),
			$data: path.resolve("src/data"),
			$utils: path.resolve("src/utils"),
		}
	}
};

export default config;
