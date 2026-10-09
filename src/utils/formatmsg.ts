import silentEcho from './silentecho';

/**
 * @description This function reads the input message
 * and replaces the variables defined in the message
 * with the data in argv.
**/
export default function formatMessage(message: string, argv: readonly unknown[]): string {
	if (argv.length === 0 || !message.includes('%v')) {
		return message;
	}

	let formatted = '';
	let argvCursor = 0;
	const len = message.length;

	for (let i = 0; i < len; i++) {
		const ch = message[i]!;

		if (ch === '%' && i + 1 < len && message[i + 1] === 'v') {
			i++;

			if (argvCursor < argv.length) {
				formatted += silentEcho(argv[argvCursor++]);
			} else {
				formatted += '%v';
			}

			continue;
		}

		formatted += ch;
	}

	return formatted;
}
