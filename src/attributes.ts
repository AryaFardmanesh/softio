import {
	ANSI_Cursor_Movement_T,
	ANSI_Cursor_Style_T,
	BgColorParam_T,
	ANSI_Style_T,
	ColorParam_T,
	ANSI_Erase_T
} from './main.d';
import {
	backgroundColors,
	convertHexToRGB,
	cursorDirection,
	cursorVisibility,
	eraseMode,
	fonts,
	hexPattern,
	resetFonts,
	textColors
} from './var/ansi';
import {
	_bg,
	_color,
	_fontStyle
} from './var/attrSymbols';
import { stdout } from './var/io';


export default class Attr {
	static [_bg]: BgColorParam_T = 'default';

	static [_color]: ColorParam_T = 'default';

	static [_fontStyle]: ANSI_Style_T[] = [];

	public static get title(): string {
		return process.title;
	}

	public static set title( value: string ) {
		process.title = value;
	}

	public static get width(): number {
		return stdout.columns;
	}

	public static get height(): number {
		return stdout.rows;
	}

	public static reset(): void {
		stdout.write( '\x1B[0m' );
	}

	public static color( color: ColorParam_T ): void {
		this[ _color ] = color;

		if ( Array.isArray( color ) ) {
			stdout.write( `\x1B[38;2;${ color[0] };${ color[1] };${ color[2] }m` );
		}else if ( typeof color === 'number' ) {
			stdout.write( `\x1B[38;5;${ color }m` );
		}else if ( hexPattern.test( color ) ) {
			const rgb = convertHexToRGB( color );
			stdout.write( `\x1B[38;2;${ rgb[0] };${ rgb[1] };${ rgb[2] }m` );
		}else {
			stdout.write( textColors[ color ] || textColors.default );
		}
	}

	public static colorRGB( red: number, green: number, blue: number ): void {
		this[ _color ] = [ red, green, blue ];
		stdout.write( `\x1B[38;2;${ red };${ green };${ blue }m` );
	}

	public static colorHex( hex: string ): void {
		if ( !hexPattern.test( hex ) ) {
			throw new TypeError( `Attr.colorHex: '${ hex }' is not valid Hex value.` );
		}

		const rgb = convertHexToRGB( hex );
		this[ _color ] = rgb;
		stdout.write( `\x1B[38;2;${ rgb[ 0 ] };${ rgb[ 1 ] };${ rgb[ 2 ] }m` );
	}

	public static background( color: BgColorParam_T ): void {
		this[ _bg ] = color;

		if ( Array.isArray( color ) ) {
			stdout.write( `\x1B[48;2;${ color[0] };${ color[1] };${ color[2] }m` );
		}else if ( typeof color === 'number' ) {
			stdout.write( `\x1B[48;5;${ color }m` );
		}else if ( hexPattern.test( color ) ) {
			const rgb = convertHexToRGB( color );
			stdout.write( `\x1B[48;2;${ rgb[0] };${ rgb[1] };${ rgb[2] }m` );
		}else {
			stdout.write( backgroundColors[ color ] || backgroundColors.default );
		}
	}

	public static backgroundRGB( red: number, green: number, blue: number ): void {
		this[ _bg ] = [ red, green, blue ];
		stdout.write( `\x1B[48;2;${ red };${ green };${ blue }m` );
	}

	/**
	 * @deprecated
	**/
	public static backgroundHex( hex: string ): void {
		if ( !hexPattern.test( hex ) ) {
			throw new TypeError( `Attr.backgroundHex: '${ hex }' is not valid Hex value.` );
		}

		const rgb = convertHexToRGB( hex );
		this[ _bg ] = rgb;
		stdout.write( `\x1B[48;2;${ rgb[ 0 ] };${ rgb[ 1 ] };${ rgb[ 2 ] }m` );
	}

	public static style( style: ANSI_Style_T ): void {
		const result = fonts[ style ];
		if ( result !== undefined ) {
			this[ _fontStyle ].push( style );
			stdout.write( result );
		}
	}

	public static styleReset( style: ANSI_Style_T ): void {
		stdout.write( resetFonts[ style ] );

		const index = this[ _fontStyle ].indexOf( style );
		if ( index !== -1 ) {
			this[_fontStyle].splice( index, 1 );
		}
	}

	public static styleOffAll(): void {
		stdout.write(
			resetFonts[ 'bold' ] +
			resetFonts[ 'italic' ] +
			resetFonts[ 'underline' ] +
			resetFonts[ 'blinking' ] +
			resetFonts[ 'reverse' ] +
			resetFonts[ 'hidden' ] +
			resetFonts[ 'strikethrough' ]
		);
	}

	public static move( x: number, y: number, suffix: ( 'H'|'f' ) = 'f' ): void {
		stdout.write( `\x1B[${ x };${ y }${ suffix }` );
	}

	public static moveCol( x: number ): void {
		stdout.write( `\x1B[${ x }G` );
	}

	public static moveHome(): void {
		stdout.write( '\x1B[H' );
	}

	public static cursorWalk( direction: ANSI_Cursor_Movement_T, value: number = 1 ): void {
		stdout.write( cursorDirection[ direction ].replace( '#', value.toString() ) );
	}

	public static cursorSave( mode: 'DEC' | 'SCO' = 'SCO' ): void {
		const code = ( mode === 'SCO' ) ? 's' : '7';
		stdout.write( '\x1B[' + code );
	}

	public static cursorRestore( mode: 'DEC' | 'SCO' = 'SCO' ): void {
		const code = ( mode === 'SCO' ) ? 'u' : '8';
		stdout.write( '\x1B[' + code );
	}

	public static cursorStyle( style: ANSI_Cursor_Style_T ): void {
		stdout.write( cursorVisibility[ style ] );
	}

	public static erase( mode: ANSI_Erase_T = 'entire' ): void {
		stdout.write( eraseMode[ mode ] );
	}
}
