import { defineConfig } from 'tsup';
import pkg from './package.json';

const banner = `/**
* Softio v${pkg.version}
* Elegant and unified terminal I/O for Node.js
* (c) Softio Contributors - MIT License
*/`;

export default defineConfig({
	entry: ['src/main.ts'],
	format: ['cjs'],
	target: 'node18',
	outDir: 'dist',
	clean: true,
	dts: true,
	bundle: true,
	sourcemap: false,
	banner: {
		js: banner
	},
	esbuildPlugins: [
		{
			name: 'replace-version',
			setup(build) {
				build.onLoad({ filter: /\.(ts|js)$/ }, async (args) => {
					const fs = await import('node:fs/promises');
					let contents = await fs.readFile(args.path, 'utf-8');

					if (contents.includes('@VERSION')) {
						contents = contents.replaceAll('@VERSION', pkg.version);
						return { contents, loader: args.path.endsWith('.ts') ? 'ts' : 'js' };
					}

					return null;
				});
			},
		}
	]
});
