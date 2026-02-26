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

		return `\x1B[38;5;${color}m`;
	}

	switch ( color ) {
		case 'black':
			return '\x1B[30m';
		case 'red':
			return '\x1B[31m';
		case 'green':
			return '\x1B[32m';
		case 'yellow':
			return '\x1B[33m';
		case 'blue':
			return '\x1B[34m';
		case 'magenta':
			return '\x1B[35m';
		case 'cyan':
			return '\x1B[36m';
		case 'white':
			return '\x1B[37m';
		case 'default':
			return '\x1B[39m';
		case 'bright-black':
			return '\x1B[90m';
		case 'bright-red':
			return '\x1B[91m';
		case 'bright-green':
			return '\x1B[92m';
		case 'bright-yellow':
			return '\x1B[93m';
		case 'bright-blue':
			return '\x1B[94m';
		case 'bright-magenta':
			return '\x1B[95m';
		case 'bright-cyan':
			return '\x1B[96m';
		case 'bright-white':
			return '\x1B[97m';
		default:
			throw new TypeError( `The color name '${ color }' is invalid for a text color.` );
	}
}

export function convertTextBackgroundToANSI( color: ANSI_Background_T | number ): string {
	if ( typeof color === 'number' ) {
		if ( color > 255 || color < 0 ) {
			throw new TypeError( `You have selected the number ${ color } for the background color, while the background color code should be between 0 and 255.` );
		}

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
		case 'default':
			return makeANSI( [ '49' ] );
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
			throw new TypeError( `The color name '${ color }' is invalid for a background color.` );
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
	if ( !isValidHex( hex ) ) {
		throw new TypeError( `The code '${ hex }' is not a valid hex color.` );
	}

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
