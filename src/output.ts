const stdout = process.stdout;
const stderr = process.stderr;

function convertToString( data: unknown ): string {
	if ( typeof data?.toString === 'function' ) {
		return data.toString();
	}else if ( typeof data === 'undefined' ) {
		return 'undefined';
	}else if ( data === null ) {
		return 'null';
	}else if ( data instanceof Object ) {
		throw new TypeError( 'Sorry, non-primitive data types are not yet supported.' );
	}

	// It never gets to this point.
	return '<@UNKNOWN_TYPE_ERROR@>';
}

function parserMessageArray( message: unknown[] ): string {
	let messageStr: string = '';

	for ( const each of message ) {
		messageStr += convertToString( each );
		messageStr += ' ';
	}

	// Skip the last white spcae
	return messageStr.slice( 0, -1 );
}

function formatMessage( message: string, ...argv: unknown[] ): string {
	let formatMessage: string = '';
	let argvPtr = 0;

	for ( let i: number = 0; i < message.length; i++ ) {
		const ch = message[ i ];

		if ( ch === '%' && message[ i + 1 ] === 'v' ) {
			i++;
			formatMessage += convertToString( argv[ argvPtr++ ] );
			continue;
		}

		formatMessage += ch;
	}

	return formatMessage;
}

export default {
	write( ...message: unknown[] ): void {
		const messageStr: string = parserMessageArray( message );
		stdout.write( messageStr );
	},

	writeln( ...message: unknown[] ): void {
<<<<<<< HEAD
		const messageStr: string = parserMessageArray( message ) + '\n';
		stdout.write( messageStr );
=======
		message.push( '\n' );
		this.write( ...message );
>>>>>>> e1bef98 (Change: unknown params.)
	},

	printf( message: string = '', ...argv: unknown[] ): void {
		if ( typeof message !== 'string' ) {
			throw new TypeError( `The 'printf' method given only string message.` );
		}

		message = formatMessage( message, ...argv );

		stdout.write( message );
	},

	error( message: string = '', ...argv: unknown[] ): void {
		if ( typeof message !== 'string' ) {
			throw new TypeError( `The 'error' method given only string message.` );
		}

		message = formatMessage( message, ...argv );

		stderr.write( message );
	},
};
