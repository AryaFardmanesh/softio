import { ANSI_Style_T, BgColorParam_T, ColorParam_T, StyleFunction } from './main.d';
import { Utils } from './main';

const styles = {
	// Colors
	black: ( text: string ) => '\x1B[30m' + text + '\x1B[39m',
	red: ( text: string ) => '\x1B[31m' + text + '\x1B[39m',
	green: ( text: string ) => '\x1B[32m' + text + '\x1B[39m',
	yellow: ( text: string ) => '\x1B[33m' + text + '\x1B[39m',
	blue: ( text: string ) => '\x1B[34m' + text + '\x1B[39m',
	magenta: ( text: string ) => '\x1B[35m' + text + '\x1B[39m',
	cyan: ( text: string ) => '\x1B[36m' + text + '\x1B[39m',
	white: ( text: string ) => '\x1B[37m' + text + '\x1B[39m',
	brightBlack: ( text: string ) => '\x1B[90m' + text + '\x1B[39m',
	brightRed: ( text: string ) => '\x1B[91m' + text + '\x1B[39m',
	brightGreen: ( text: string ) => '\x1B[92m' + text + '\x1B[39m',
	brightYellow: ( text: string ) => '\x1B[93m' + text + '\x1B[39m',
	brightBlue: ( text: string ) => '\x1B[94m' + text + '\x1B[39m',
	brightMagenta: ( text: string ) => '\x1B[95m' + text + '\x1B[39m',
	brightCyan: ( text: string ) => '\x1B[96m' + text + '\x1B[39m',
	brightWhite: ( text: string ) => '\x1B[97m' + text + '\x1B[39m',

	// Backgrounds
	bgBlack: ( text: string ) => '\x1B[40m' + text + '\x1B[49m',
	bgRed: ( text: string ) => '\x1B[41m' + text + '\x1B[49m',
	bgGreen: ( text: string ) => '\x1B[42m' + text + '\x1B[49m',
	bgYellow: ( text: string ) => '\x1B[43m' + text + '\x1B[49m',
	bgBlue: ( text: string ) => '\x1B[44m' + text + '\x1B[49m',
	bgMagenta: ( text: string ) => '\x1B[45m' + text + '\x1B[49m',
	bgCyan: ( text: string ) => '\x1B[46m' + text + '\x1B[49m',
	bgWhite: ( text: string ) => '\x1B[47m' + text + '\x1B[49m',
	bgBrightBlack: ( text: string ) => '\x1B[100m' + text + '\x1B[49m',
	bgBrightRed: ( text: string ) => '\x1B[101m' + text + '\x1B[49m',
	bgBrightGreen: ( text: string ) => '\x1B[102m' + text + '\x1B[49m',
	bgBrightYellow: ( text: string ) => '\x1B[103m' + text + '\x1B[49m',
	bgBrightBlue: ( text: string ) => '\x1B[104m' + text + '\x1B[49m',
	bgBrightMagenta: ( text: string ) => '\x1B[105m' + text + '\x1B[49m',
	bgBrightCyan: ( text: string ) => '\x1B[106m' + text + '\x1B[49m',
	bgBrightWhite: ( text: string ) => '\x1B[107m' + text + '\x1B[49m',

	// Fonts
	bold: ( text: string ) => '\x1B[1m' + text  + '\x1B[22m',
	dim: ( text: string ) => '\x1B[2m' + text + '\x1B[22m',
	italic: ( text: string ) => '\x1B[3m' + text + '\x1B[23m',
	underline: ( text: string ) => '\x1B[4m' + text + '\x1B[24m',
	blinking: ( text: string ) => '\x1B[5m' + text + '\x1B[25m',
	reverse: ( text: string ) => '\x1B[7m' + text + '\x1B[27m',
	hidden: ( text: string ) => '\x1B[8m' + text + '\x1B[28m',
	strikethrough: ( text: string ) => '\x1B[9m' + text + '\x1B[29m',

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
		}, text );
	};

	return new Proxy( fn, {
		get( target, prop, receiver ) {
			if ( prop === 'color' || prop === 'background' || prop === 'fontStyle' ) {
				return ( value: ColorParam_T|BgColorParam_T|ANSI_Style_T ) => createStyler( [
					...applied,
					( text ) => {
						if ( prop === 'fontStyle' )
							return Utils.fontStyle(
								value as ANSI_Style_T
							)
							+ text +
							Utils.fontStyleReset(
								value as ANSI_Style_T
							);
						return `${ Utils[ prop ]( value ) }${ text }${ Utils[ prop ]( 'default' ) }`;
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
