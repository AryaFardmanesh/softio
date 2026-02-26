import { BgColorParam_T, ColorParam_T, StyleFunction } from './main.d';
import { Utils } from './main';

const styles = {
	// Colors
	black: ( text: string ) => '\x1B[30m' + text,
	red: ( text: string ) => '\x1B[31m' + text,
	green: ( text: string ) => '\x1B[32m' + text,
	yellow: ( text: string ) => '\x1B[33m' + text,
	blue: ( text: string ) => '\x1B[34m' + text,
	magenta: ( text: string ) => '\x1B[35m' + text,
	cyan: ( text: string ) => '\x1B[36m' + text,
	white: ( text: string ) => '\x1B[37m' + text,
	brightBlack: ( text: string ) => '\x1B[90m' + text,
	brightRed: ( text: string ) => '\x1B[91m' + text,
	brightGreen: ( text: string ) => '\x1B[92m' + text,
	brightYellow: ( text: string ) => '\x1B[93m' + text,
	brightBlue: ( text: string ) => '\x1B[94m' + text,
	brightMagenta: ( text: string ) => '\x1B[95m' + text,
	brightCyan: ( text: string ) => '\x1B[96m' + text,
	brightWhite: ( text: string ) => '\x1B[97m' + text,

	// Backgrounds
	bgBlack: ( text: string ) => '\x1B[40m' + text,
	bgRed: ( text: string ) => '\x1B[41m' + text,
	bgGreen: ( text: string ) => '\x1B[42m' + text,
	bgYellow: ( text: string ) => '\x1B[43m' + text,
	bgBlue: ( text: string ) => '\x1B[44m' + text,
	bgMagenta: ( text: string ) => '\x1B[45m' + text,
	bgCyan: ( text: string ) => '\x1B[46m' + text,
	bgWhite: ( text: string ) => '\x1B[47m' + text,
	bgBrightBlack: ( text: string ) => '\x1B[100m' + text,
	bgBrightRed: ( text: string ) => '\x1B[101m' + text,
	bgBrightGreen: ( text: string ) => '\x1B[102m' + text,
	bgBrightYellow: ( text: string ) => '\x1B[103m' + text,
	bgBrightBlue: ( text: string ) => '\x1B[104m' + text,
	bgBrightMagenta: ( text: string ) => '\x1B[105m' + text,
	bgBrightCyan: ( text: string ) => '\x1B[106m' + text,
	bgBrightWhite: ( text: string ) => '\x1B[107m' + text,

	// Fonts
	bold: ( text: string ) => '\x1B[1m' + text,
	dim: ( text: string ) => '\x1B[2m' + text,
	italic: ( text: string ) => '\x1B[3m' + text,
	underline: ( text: string ) => '\x1B[4m' + text,
	blinking: ( text: string ) => '\x1B[5m' + text,
	reverse: ( text: string ) => '\x1B[7m' + text,
	hidden: ( text: string ) => '\x1B[8m' + text,
	strikethrough: ( text: string ) => '\x1B[9m' + text,

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
