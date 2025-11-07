import { StyleFunction } from './main.d';
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
	reset: ( text: string ) => Utils.color( 'default' ) + text,

	// Backgrounds
	bgBlack: ( text: string ) => Utils.color( 'black' ) + text,
	bgRed: ( text: string ) => Utils.color( 'red' ) + text,
	bgGreen: ( text: string ) => Utils.color( 'green' ) + text,
	bgYellow: ( text: string ) => Utils.color( 'yellow' ) + text,
	bgBlue: ( text: string ) => Utils.color( 'blue' ) + text,
	bgMagenta: ( text: string ) => Utils.color( 'magenta' ) + text,
	bgCyan: ( text: string ) => Utils.color( 'cyan' ) + text,
	bgWhite: ( text: string ) => Utils.color( 'white' ) + text,
	bgBrightBlack: ( text: string ) => Utils.color( 'bright-black' ) + text,
	bgBrightRed: ( text: string ) => Utils.color( 'bright-red' ) + text,
	bgBrightGreen: ( text: string ) => Utils.color( 'bright-green' ) + text,
	bgBrightYellow: ( text: string ) => Utils.color( 'bright-yellow' ) + text,
	bgBrightBlue: ( text: string ) => Utils.color( 'bright-blue' ) + text,
	bgBrightMagenta: ( text: string ) => Utils.color( 'bright-magenta' ) + text,
	bgBrightCyan: ( text: string ) => Utils.color( 'bright-cyan' ) + text,
	bgBrightWhite: ( text: string ) => Utils.color( 'bright-white' ) + text,
	bgReset: ( text: string ) => Utils.color( 'default' ) + text,

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

function createAttr( applied: StyleFunction[] = [] ) {
	const fn = ( text: string ) => {
		return applied.reduce( ( acc, fn ) => fn( acc ), text ) + Utils.reset();
	};

	return new Proxy( fn, {
		get( target, prop, receiver ) {
			if ( typeof prop === 'string' && prop in styles ) {
				return createAttr( [ ...applied, styles[ prop ] ] );
			}

			return Reflect.get( target, prop, receiver );
		},
	} );
}

export default createAttr();
