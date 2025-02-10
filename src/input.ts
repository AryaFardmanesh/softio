import readline from 'node:readline/promises';
import readlineSync from 'node:readline';
import typeCheck from './utils/typecheck';
import { stdout } from './var/stdout';
import { stdin } from './var/stdin';

export default class In {
	public static async input( message: string = '' ): Promise<string> {
		typeCheck( 'In.input', 'string', message );

		const readLineStream: readline.Interface = readline.createInterface( {
			output: stdout,
			input: stdin
		} );

		const result: string = await readLineStream.question( message );

		readLineStream.close();

		return result;
	}

	public static async password( message: string = '', char: string = '' ): Promise<string> {
		typeCheck( 'In.password', 'string', message );
		typeCheck( 'In.password', 'string', char );

		const readLineStream = readlineSync.createInterface( {
			input: stdin,
			output: stdout,
			terminal: true,
		} ) as readlineSync.Interface & { _writeToOutput: ( str: string ) => void };

		const result = await new Promise<string>( ( resolve ) => {
			readLineStream.question( message, ( input: string ) => {
				stdout.write( '\n' );
				readLineStream.close();
				resolve( input );
			} );

			readLineStream._writeToOutput = function ( _str: string ) {
				stdout.write( char );
			};
		} );

		return result;
	}

	public static async confirm( message: string = '' ): Promise<boolean> {
		/*
			@Warning: We must check the type of the input
			message before doing anything because it may
			cause an error.
			The input message is checked once more when it
			is given to the 'input' function, but we cannot
			rely on checking the 'input' data type alone
			because if the input message is anything other
			than a string, it will be affected by the
			`message += ' (y/n) ';`	expression.

			Consider the following examples:
				message: <number>( 2 )
				<- message += ' (y/n) ';
				-> '2 (y/n) '

			Therefore, type checking must be done in this
			method.
		*/
		typeCheck( 'confirm', 'string', message );
		/* .................................... */

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
	}

	public static async readNumber( message: string = '' ): Promise<number> {
		const result = await this.input( message );
		return Number( result );
	}
}
