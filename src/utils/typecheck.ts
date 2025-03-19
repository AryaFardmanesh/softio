/**
 * @description This function checks whether
 * the data type is correct.
**/
export default function typeCheck( name: string, expected: string | string[], data: unknown ): void | never {
	if ( Array.isArray( expected ) ) {
		for ( const expectedType of expected ) {
			if ( typeof data === expectedType ) {
				return;
			}
		}
	}else if ( typeof data === expected ) {
		return;
	}

	throw new TypeError( `The '${ name }' method given only ${ expected } message.` );
}
