export const base = '\x1B';

export function makeANSI( code: ( string | number )[], end: string = 'm', start: string = '' ): string {
	return base + `[${ start }${ code.join( ';' ) }${ end }`;
}
