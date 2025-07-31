import silentEcho from './silentecho';
import typeCheck from './typecheck';

/**
 * @description This function reads the input message
 * and replaces the variables defined in the message
 * with the data in argv.
**/
export default function formatMessage( message: string, argv: unknown[] ): string {
	typeCheck( 'formatMessage', 'string', message );

	let formatMessage: string = '';
	let argvCursor = 0;

	for ( let i: number = 0; i < message.length; i++ ) {
		const ch = message[ i ];

		if ( ch === '%' && message[ i + 1 ] === 'v' ) {
			i++;
			formatMessage += silentEcho( argv[ argvCursor++ ] );
			continue;
		}

		formatMessage += ch;
	}

	return formatMessage;
}
