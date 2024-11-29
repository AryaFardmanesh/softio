import readline from 'node:readline/promises';

const stdin = process.stdin;
const stdout = process.stdout;

export default {
	async input( message: string = '' ): Promise<string> {
		if ( typeof message !== 'string' ) {
			throw new TypeError( `The 'input' function only takes a string as a message.` );
		}

		const readLineStream: readline.Interface = readline.createInterface( {
			output: stdout,
			input: stdin
		} );

		const result: string = await readLineStream.question( message );

		readLineStream.close();

		return result;
	},

	async confirm( message: string = '' ): Promise<boolean> {
		message += ' (y/n) ';

		const result = ( await this.input( message ) ).trim().toUpperCase();
		let isOk = false;

		if ( result === 'Y' || result === 'YES' || result === 'OK' ) {
			isOk = true;
		}

		return isOk;
	},

	async readNumber( message: string = '' ): Promise<number> {
		const result = ( await this.input( message ) ).trim();
		return Number( result );
	},
};
