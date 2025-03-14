import { makeANSI } from './base';

export type ANSI_Style_T =
	'bold'		|
	'dim'		|
	'italic'	|
	'underline'	|
	'blinking'	|
	'reverse'	|
	'hidden'	|
	'strikethrough' |
	'default'
;

export function convertTextStyleToANSI( style: ANSI_Style_T ): string {
	switch ( style ) {
		case 'bold':
			return makeANSI( [ '1' ] );
		case 'dim':
			return makeANSI( [ '2' ] );
		case 'italic':
			return makeANSI( [ '3' ] );
		case 'underline':
			return makeANSI( [ '4' ] );
		case 'blinking':
			return makeANSI( [ '5' ] );
		case 'reverse':
			return makeANSI( [ '7' ] );
		case 'hidden':
			return makeANSI( [ '8' ] );
		case 'strikethrough':
			return makeANSI( [ '9' ] );
		default:
			return makeANSI( [ '0' ] );
	}
}
