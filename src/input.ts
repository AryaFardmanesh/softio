import { stdin, stdout } from './var/io';
import readline from 'node:readline/promises';

export default class In {

	public static async input( message: string = '' ): Promise<string> {
		const rl = readline.createInterface( {
			input: stdin,
			output: stdout,
		} );

		const line = await rl.question( message );
		rl.close();
		return line;
	}

	public static async password( message: string = '', mask: string = '' ): Promise<string> {
		// ????
		const rl = readline.createInterface( {
			input: stdin
		} );

		const data = await rl.question( message );
		rl.close();
		return data;
	}

	public static async confirm( message: string = '' ): Promise<boolean> {
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
