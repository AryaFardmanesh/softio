import typeCheck from './utils/typecheck';
import { stdout } from './var/stdout';
import { makeANSI } from './var/ansi/base';

export default class Utilities {
	public static center( message: string ): string {
		typeCheck( 'center', 'string', message );

		const endSpace: number = ( stdout.columns / 2 ) - ( message.length / 2 );
		let centerMessage: string = '';

		// Columns start from one.
		for ( let i: number = 1; i <= endSpace; i++ ) {
			centerMessage += ' ';
		}
		centerMessage += message;

		return centerMessage;
	}

	public static clear(): void {
		stdout.write( '\x1b[2J' );
	}

	public static reset(): string {
		return makeANSI( [ '0' ] );
	}
}
