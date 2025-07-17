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

	// Check RGB color
	if ( Array.isArray( color ) ) {
		return makeANSI( [ ansiRgbPrefix, '2', color[ 0 ] || '0', color[ 1 ] || '0', color[ 2 ] || '0' ] );
	}else if ( typeof color == 'string' && isValidHex( color ) ) {
		const rgb = convertHexToRGB( color );
		return makeANSI( [ ansiRgbPrefix, '2', rgb[ 0 ] || '0', rgb[ 1 ] || '0', rgb[ 2 ] || '0' ] );
	}else if ( typeof color == 'string' || typeof color == 'number' ) {
		return ( mode == 'color' ) ?
		convertTextColorToANSI( color as ( ANSI_Color_T | number ) ) :
		convertTextBackgroundToANSI( color as ( ANSI_Background_T | number ) );
	}

	throw new TypeError( `The input value for the '.${ name }' function is incorrect.` );
}
