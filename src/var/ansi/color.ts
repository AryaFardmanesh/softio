import { makeANSI } from './base';
import {
	ANSI_Color_T,
	ANSI_Background_T
} from '../../main.d';

export function convertTextColorToANSI( color: ANSI_Color_T | number ): string {
	if ( typeof color === 'number' ) {
		if ( color > 255 || color < 0 ) {
			throw new TypeError( `You have selected the number ${ color } for the text color, while the text color code should be between 0 and 255.` );
		}

		return makeANSI( [ '38', '5', color ] );
	}

	switch ( color ) {
		case 'black':
			return makeANSI( [ '30' ] );
		case 'red':
			return makeANSI( [ '31' ] );
		case 'green':
			return makeANSI( [ '32' ] );
		case 'yellow':
			return makeANSI( [ '33' ] );
		case 'blue':
			return makeANSI( [ '34' ] );
		case 'magenta':
			return makeANSI( [ '35' ] );
		case 'cyan':
			return makeANSI( [ '36' ] );
		case 'white':
			return makeANSI( [ '37' ] );
		case 'bright-black':
			return makeANSI( [ '90' ] );
		case 'bright-red':
			return makeANSI( [ '91' ] );
		case 'bright-green':
			return makeANSI( [ '92' ] );
		case 'bright-yellow':
			return makeANSI( [ '93' ] );
		case 'bright-blue':
			return makeANSI( [ '94' ] );
		case 'bright-magenta':
			return makeANSI( [ '95' ] );
		case 'bright-cyan':
			return makeANSI( [ '96' ] );
		case 'bright-white':
			return makeANSI( [ '97' ] );
		default:
			throw new TypeError( `The color name '${ color }' is invalid for a text color.` );
	}
}

export function convertTextBackgroundToANSI( color: ANSI_Background_T | number ): string {
	if ( typeof color === 'number' ) {
		return makeANSI( [ '48', '5', color ] );
	}

	switch ( color ) {
		case 'black':
			return makeANSI( [ '40' ] );
		case 'red':
			return makeANSI( [ '41' ] );
		case 'green':
			return makeANSI( [ '42' ] );
		case 'yellow':
			return makeANSI( [ '44' ] );
		case 'blue':
			return makeANSI( [ '44' ] );
		case 'magenta':
			return makeANSI( [ '45' ] );
		case 'cyan':
			return makeANSI( [ '46' ] );
		case 'white':
			return makeANSI( [ '47' ] );
		case 'bright-black':
			return makeANSI( [ '100' ] );
		case 'bright-red':
			return makeANSI( [ '101' ] );
		case 'bright-green':
			return makeANSI( [ '102' ] );
		case 'bright-yellow':
			return makeANSI( [ '103' ] );
		case 'bright-blue':
			return makeANSI( [ '104' ] );
		case 'bright-magenta':
			return makeANSI( [ '105' ] );
		case 'bright-cyan':
			return makeANSI( [ '106' ] );
		case 'bright-white':
			return makeANSI( [ '107' ] );
		default:
			return makeANSI( [ '49' ] );
	}
}

export function isValidHex( hex: string ): boolean {
	if ( hex.startsWith( '#' ) ) {
		hex = hex.slice( 1 );
	}

	if ( hex.length !== 6 && hex.length !== 3 ) {
		return false;
	}

	hex = hex.toUpperCase();
	for ( let i = 0; i < hex.length; i++ ) {
		const ascii = hex.charCodeAt( i );

		if ( ascii >= 48 /* 0 */ && ascii <= 57 /* 9 */ ) {
			continue;
		}else if ( ascii >= 65 /* A */ && ascii <= 70 /* F */ ) {
			continue;
		}

		return false;
	}

	return true;
}

export function convertHexToRGB( hex: string ): [ number, number, number ] {
	if ( hex.startsWith( '#' ) ) {
		hex = hex.slice( 1 );
	}

	let rgb: [ number, number, number ] = [ 255, 255, 255 ];

	if ( hex.length === 3 ) {
		for ( let i = 0; i < 3; i++ ) {
			const section = '0x' + ( hex[ i ] + hex[ i ] );
			rgb[ i ] = Number( section );
		}
	}else if ( hex.length === 6 ) {
		let index = 0;
		for ( let i = 0; i < 6; i += 2 ) {
			const section = '0x' + ( hex[ i ] + hex[ i + 1 ] );
			rgb[ index++ ] = Number( section );
		}
	}

	return rgb;
}
