export const base = '\x1B';

export function makeANSI( code: ( string | number )[], end: string = 'm', start: string = '' ): string {
	const errMsg = `The value of the 'makeANSI' function must be of type ( string | number )[].`;

	if ( !Array.isArray( code ) ) {
		throw new TypeError( errMsg );
	}

	for ( const part of code ) {
		if ( typeof part != 'string' && typeof part != 'number' ) {
			// goto err;
			throw new TypeError( errMsg );
		}
	}

	return base + `[${ start }${ code.join( ';' ) }${ end }`;
}
