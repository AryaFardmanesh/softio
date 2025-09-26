import { makeANSI } from './base';
import { ANSI_Style_T } from '../../main.d';

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
			throw new TypeError( `The color name '${ style }' is invalid for a text style.` );
	}
}

export function convertDisableTextStyleANSI( style: ANSI_Style_T ): string {
	switch ( style ) {
		case 'bold':
			return makeANSI( [ '22' ] );
		case 'dim':
			return makeANSI( [ '22' ] );
		case 'italic':
			return makeANSI( [ '23' ] );
		case 'underline':
			return makeANSI( [ '24' ] );
		case 'blinking':
			return makeANSI( [ '25' ] );
		case 'reverse':
			return makeANSI( [ '27' ] );
		case 'hidden':
			return makeANSI( [ '28' ] );
		case 'strikethrough':
			return makeANSI( [ '29' ] );
		default:
			throw new TypeError( `The color name '${ style }' is invalid for a text style.` );
	}
}
