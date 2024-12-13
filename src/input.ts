import readline from 'node:readline/promises';
import typeCheck from './utils/type-check';

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
		/*
			@Warning: We must check the type of the input
			message before doing anything because it may
			cause an error.
			The input message is checked once more when it
			is given to the "input" function, but we cannot
			rely on checking the "input" data type alone
			because if the input message is anything other
			than a string, it will be affected by the
			"message += ' (y/n) ';"	expression.

			Consider the following examples:
				message: <number>( 2 )
				<- message += ' (y/n) ';
				-> '2 (y/n) '

			Therefore, type checking must be done in this
			method.
		*/
		typeCheck( 'confirm', 'string', message );

		message += ' (y/n) ';

		const result = ( await this.input( message ) ).trim().toUpperCase();

		switch ( result ) {
			case 'Y':
			case 'YES':
			case 'OK':
				return true;
			default:
				return false;
		}
	},

	async readNumber( message: string = '' ): Promise<number> {
		const result = await this.input( message );
		return Number( result );
	},
};
