import { makeANSI } from './base';
import {
	ANSI_Color_T,
	ANSI_Background_T
} from '../../main.d';

const textColors = {
	'black': '\x1B[30m',
	'red': '\x1B[31m',
	'green': '\x1B[32m',
	'yellow': '\x1B[33m',
	'blue': '\x1B[34m',
	'magenta': '\x1B[35m',
	'cyan': '\x1B[36m',
	'white': '\x1B[37m',
	'default': '\x1B[39m',
	'bright-black': '\x1B[90m',
	'bright-red': '\x1B[91m',
	'bright-green': '\x1B[92m',
	'bright-yellow': '\x1B[93m',
	'bright-blue': '\x1B[94m',
	'bright-magenta': '\x1B[95m',
	'bright-cyan': '\x1B[96m',
	'bright-white': '\x1B[97m'
};

const backgroundColors = {
	'black': '\x1B[40m',
	'red': '\x1B[41m',
	'green': '\x1B[42m',
	'yellow': '\x1B[43m',
	'blue': '\x1B[44m',
	'magenta': '\x1B[45m',
	'cyan': '\x1B[46m',
	'white': '\x1B[47m',
	'default': '\x1B[49m',
	'bright-black': '\x1B[100m',
	'bright-red': '\x1B[101m',
	'bright-green': '\x1B[102m',
	'bright-yellow': '\x1B[103m',
	'bright-blue': '\x1B[104m',
	'bright-magenta': '\x1B[105m',
	'bright-cyan': '\x1B[106m',
	'bright-white': '\x1B[107m'
};

export const hexPattern = new RegExp('^#(?:[0-9a-fA-F]{3}){1,2}$');

export function convertTextColorToANSI( color: ANSI_Color_T | number ): string {
	if ( typeof color === 'number' ) {
		if ( color > 255 || color < 0 ) {
			throw new TypeError( `You have selected the number ${ color } for the text color, while the text color code should be between 0 and 255.` );
		}

		return `\x1B[38;5;${color}m`;
	}

	const result = textColors[ color ];
	if ( result === undefined ) {
		throw new TypeError( `The color name '${ color }' is invalid for a text color.` );
	}

	return result;
}

export function convertTextBackgroundToANSI( color: ANSI_Background_T | number ): string {
	if ( typeof color === 'number' ) {
		if ( color > 255 || color < 0 ) {
			throw new TypeError( `You have selected the number ${ color } for the background color, while the background color code should be between 0 and 255.` );
		}

		return makeANSI( [ '48', '5', color ] );
	}

	const result = backgroundColors[ color ];
	if ( result === undefined ) {
		throw new TypeError( `The color name '${ color }' is invalid for a background color.` );
	}

	return result;
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
