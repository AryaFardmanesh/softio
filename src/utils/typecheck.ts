/**
 * @description This function checks whether
 * the data type is correct.
**/
export default function typeCheck( name: string, expected: string, data: unknown ): void {
	if ( typeof data !== expected ) {
		throw new TypeError( `The '${ name }' method given only ${ expected } message.` );
	}
}
