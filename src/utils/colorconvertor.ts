import { makeANSI } from '../var/ansi/base';
import {
	ANSI_Color_T,
	ANSI_Background_T,
	isValidHex,
	convertHexToRGB
} from '../var/ansi/color';

type ColorParamT = ANSI_Color_T | ANSI_Background_T | string | number | [number, number, number];
type ConvertorT = ( color: ANSI_Color_T | ANSI_Background_T | number ) => string;

export default function colorConvertor( name: string, mode: 'color' | 'bg', convertor: ConvertorT, color: ColorParamT ): string {
	const ansiRgb = ( mode === 'color' ) ? '38' : '48';
	let colorAnsi: string = '';

	if ( typeof color === 'string' ) {
		if ( isValidHex( color ) ) {
			const rgb = convertHexToRGB( color );
			colorAnsi = makeANSI( [ ansiRgb, '2', rgb[ 0 ], rgb[ 1 ], rgb[ 2 ] ] );
		}else {
			colorAnsi = convertor( <ANSI_Color_T>color );
		}
	}else if ( typeof color === 'number' ) {
		if ( color < 0 || color > 255 ) {
			throw new TypeError( `Invalid value for method '${ name }'. Number must be between 0 and 255.` );
		}

		colorAnsi = convertor( color );
	}else if ( Array.isArray( color ) && color.length >= 3 ) {
		for ( let i = 0; i < 3; i++ ) {
			const num = Number( color[ i ] );

			if ( num < 0 || num > 255 ) {
				throw new TypeError( `Invalid value for '${ name }' method. RGB values must be between 0 and 255.` );
			}
		}

		colorAnsi = makeANSI( [ ansiRgb, '2', color[ 0 ], color[ 1 ], color[ 2 ] ] );
	}else {
		throw new TypeError( `Invalid value for the 'shot' method. Expected values for color are string, number, and triplet of numbers (for RGB).` );
	}

	return colorAnsi;
}
