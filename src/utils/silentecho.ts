import { inspect } from 'node:util';

/**
 * @description Pretty-prints an unknown value similar to Node.js console.log,
 * without monkey-patching process.stdout.
 */
export default function silentEcho(...data: unknown[]): string {
	return data
		.map((item) => {
			if (typeof item === 'string') {
				return item;
			}
			return inspect(item, {
				colors: process.stdout.isTTY,
				depth: null,
				compact: false,
				breakLength: 80,
			});
		})
		.join(' ');
}
