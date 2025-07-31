import {
	ANSI_Color_T,
	ANSI_Background_T,
	ColorParam_T,
	BgColorParam_T
} from '../main.d';
import { makeANSI } from '../var/ansi/base';
import {
	isValidHex,
	convertHexToRGB,
	convertTextColorToANSI,
	convertTextBackgroundToANSI
} from '../var/ansi/color';

export default function colorConvertor( name: string, mode: 'color' | 'bg', color: ColorParam_T | BgColorParam_T ): string {
	const ansiRgbPrefix = ( mode === 'color' ) ? '38' : '48';

	if ( Array.isArray( color ) && color.length == 3 ) {
		for ( const part of color ) {
			if ( typeof part != 'number' || part > 255 || part < 0 ) {
				throw new TypeError( `The RGB value for the '.${ name }' function must be between 0 and 255.` );
			}
		}

		return makeANSI( [ ansiRgbPrefix, '2', color[ 0 ] || '0', color[ 1 ] || '0', color[ 2 ] || '0' ] );
	}else if ( typeof color == 'string' && isValidHex( color ) ) {
		const rgb = convertHexToRGB( color );
		return makeANSI( [ ansiRgbPrefix, '2', rgb[ 0 ] || '0', rgb[ 1 ] || '0', rgb[ 2 ] || '0' ] );
	}else if ( typeof color == 'string' || typeof color == 'number' ) {
		if ( typeof color == 'number' && ( color > 255 || color < 0 ) ) {
			throw new TypeError( `The color value for the '.${ name }' function must be between 0 and 255.` );
		}

		const result = ( mode == 'color' ) ?
		convertTextColorToANSI( color as ( ANSI_Color_T | number ) ) :
		convertTextBackgroundToANSI( color as ( ANSI_Background_T | number ) );

		return result;
	}

	throw new TypeError( `The input value for the '.${ name }' function is incorrect.` );
}
