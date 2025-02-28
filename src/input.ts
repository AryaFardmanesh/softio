import readlineSync from 'readline-sync';
import typeCheck from './utils/typecheck';

export default class In {
	public static input( message: string = '' ): string {
		typeCheck( 'In.input', 'string', message );
		return readlineSync.question( message );
	}

	public static password( message: string = '', char: string = '' ): string {
		typeCheck( 'In.password', 'string', message );
		typeCheck( 'In.password', 'string', char );
		return readlineSync.question( message, { hideEchoBack: true, mask: char } );
	}

	public static confirm( message: string = '' ): boolean {
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

		const result = this.input( message ).trim().toUpperCase();

		switch ( result ) {
			case 'Y':
			case 'YES':
			case 'OK':
				return true;
			default:
				return false;
		}
	}

	public static readNumber( message: string = '' ): number {
		const result = this.input( message );
		return Number( result );
	}
}
