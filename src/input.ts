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
		return new Promise( ( resolve ) => {
			stdout.write( message );

			let value = '';

			stdin.setRawMode( true );
			stdin.resume();
			stdin.setEncoding( 'utf8' );

			function onData( char ) {
				if ( char === '\r' || char === '\n' ) {
					stdout.write( '\n' );
					stdin.setRawMode( false );
					stdin.pause();
					stdin.removeListener( 'data', onData );
					resolve( value );
					return;
				}

				if ( char === '\u0003' /* Ctrl+C */ ) {
					process.exit();
				}

				if ( char === '\u007f' /* Backspace */ ) {
					if ( value.length > 0 ) {
						value = value.slice( 0, -1 );

						for (let i = 0; i < mask.length; i++) {
							stdout.write( '\b \b' );
						}
					}
					return;
				}

				value += char;
				stdout.write( mask );
			}

			stdin.on( 'data', onData );
		} );
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
