import { BgColorParam_T, ColorParam_T, StyleFunction } from './main.d';
import { Utils } from './main';

const styles = {
	// Colors
	black: ( text: string ) => Utils.color( 'black' ) + text,
	red: ( text: string ) => Utils.color( 'red' ) + text,
	green: ( text: string ) => Utils.color( 'green' ) + text,
	yellow: ( text: string ) => Utils.color( 'yellow' ) + text,
	blue: ( text: string ) => Utils.color( 'blue' ) + text,
	magenta: ( text: string ) => Utils.color( 'magenta' ) + text,
	cyan: ( text: string ) => Utils.color( 'cyan' ) + text,
	white: ( text: string ) => Utils.color( 'white' ) + text,
	brightBlack: ( text: string ) => Utils.color( 'bright-black' ) + text,
	brightRed: ( text: string ) => Utils.color( 'bright-red' ) + text,
	brightGreen: ( text: string ) => Utils.color( 'bright-green' ) + text,
	brightYellow: ( text: string ) => Utils.color( 'bright-yellow' ) + text,
	brightBlue: ( text: string ) => Utils.color( 'bright-blue' ) + text,
	brightMagenta: ( text: string ) => Utils.color( 'bright-magenta' ) + text,
	brightCyan: ( text: string ) => Utils.color( 'bright-cyan' ) + text,
	brightWhite: ( text: string ) => Utils.color( 'bright-white' ) + text,

	// Backgrounds
	bgBlack: ( text: string ) => Utils.background( 'black' ) + text,
	bgRed: ( text: string ) => Utils.background( 'red' ) + text,
	bgGreen: ( text: string ) => Utils.background( 'green' ) + text,
	bgYellow: ( text: string ) => Utils.background( 'yellow' ) + text,
	bgBlue: ( text: string ) => Utils.background( 'blue' ) + text,
	bgMagenta: ( text: string ) => Utils.background( 'magenta' ) + text,
	bgCyan: ( text: string ) => Utils.background( 'cyan' ) + text,
	bgWhite: ( text: string ) => Utils.background( 'white' ) + text,
	bgBrightBlack: ( text: string ) => Utils.background( 'bright-black' ) + text,
	bgBrightRed: ( text: string ) => Utils.background( 'bright-red' ) + text,
	bgBrightGreen: ( text: string ) => Utils.background( 'bright-green' ) + text,
	bgBrightYellow: ( text: string ) => Utils.background( 'bright-yellow' ) + text,
	bgBrightBlue: ( text: string ) => Utils.background( 'bright-blue' ) + text,
	bgBrightMagenta: ( text: string ) => Utils.background( 'bright-magenta' ) + text,
	bgBrightCyan: ( text: string ) => Utils.background( 'bright-cyan' ) + text,
	bgBrightWhite: ( text: string ) => Utils.background( 'bright-white' ) + text,

	// Fonts
	bold: ( text: string ) => Utils.fontStyle( 'bold' ) + text,
	dim: ( text: string ) => Utils.fontStyle( 'dim' ) + text,
	italic: ( text: string ) => Utils.fontStyle( 'italic' ) + text,
	underline: ( text: string ) => Utils.fontStyle( 'underline' ) + text,
	blinking: ( text: string ) => Utils.fontStyle( 'blinking' ) + text,
	reverse: ( text: string ) => Utils.fontStyle( 'reverse' ) + text,
	hidden: ( text: string ) => Utils.fontStyle( 'hidden' ) + text,
	strikethrough: ( text: string ) => Utils.fontStyle( 'strikethrough' ) + text,

	// Etc.
	center: ( text: string ) => Utils.center( text ),
};

function createStyler( applied: StyleFunction[] = [] ) {
	const fn = ( text: string ) => {
		return applied.reduce( ( acc, fn ) => {
			if ( fn.name === 'color' ) {
				return Utils.color( acc );
			}
			return fn( acc );
		}, text ) + Utils.reset();
	};

	return new Proxy( fn, {
		get( target, prop, receiver ) {
			if ( prop === 'color' || prop === 'background' ) {
				return ( color: ColorParam_T|BgColorParam_T ) => createStyler( [
					...applied,
					( text ) => {
						return `${ Utils[ prop ]( color ) }${ text }${ Utils[ prop ]( 'default' ) }`;
					}
				] );
			}else if ( typeof prop === 'string' && prop in styles ) {
				return createStyler( [ ...applied, styles[ prop ] ] );
			}

			return Reflect.get( target, prop, receiver );
		},
	} );
}

export default createStyler();
