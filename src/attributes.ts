import { stdout } from './var/stdout';
import { makeANSI } from './var/ansi/base';
import { convertDisableTextStyleANSI, convertTextStyleToANSI } from './var/ansi/style';
import { convertTextEraseToANSI } from './var/ansi/erase';
import colorConvertor from './utils/colorconvertor';
import typeCheck from './utils/typecheck';
import {
	convertTextCursorMoveToANSI,
	convertTextCursorStyleToANSI
} from './var/ansi/cursor';
import {
	convertHexToRGB,
	isValidHex
} from './var/ansi/color';
import {
	_bg,
	_color,
	_fontStyle
} from './var/attrSymbols';
import {
	ANSI_Cursor_Movement_T,
	ANSI_Cursor_Style_T,
	BgColorParam_T,
	ANSI_Style_T,
	ColorParam_T,
	ANSI_Erase_T
} from './main.d';

export default class Attr {
	static [_bg]: BgColorParam_T = 'default';

	static [_color]: ColorParam_T = 'default';

	static [_fontStyle]: ANSI_Style_T[] = [];

	public static get title(): string {
		return process.title;
	}

	public static set title( value: string ) {
		if ( typeof value !== 'string' ) {
			throw new TypeError( `The 'title' property only takes a string as a title.` );
		}

		process.title = value;
	}

	public static get width(): number {
		return stdout.columns;
	}

	public static get height(): number {
		return stdout.rows;
	}

	public static reset(): void {
		stdout.write( makeANSI( [ '0' ] ) );
	}

	public static color( color: ColorParam_T ): void {
		typeCheck( 'color', [ 'string', 'number', 'object' ], color );
		this[_color] = color;
		stdout.write( colorConvertor( 'color', 'color', color ) );
	}

	/**
	 * @deprecated
	**/
	public static colorRGB( red: number, green: number, blue: number ): void {
		this[_color] = [red, green, blue];
		stdout.write( makeANSI( [ '38', '2', red, green, blue ] ) );
	}

	/**
	 * @deprecated
	**/
	public static colorHex( hex: string ): void {
		if ( !isValidHex( hex ) ) {
			throw new TypeError( `Attr.colorHex: '${ hex }' is not valid Hex value.` );
		}

		const rgb = convertHexToRGB( hex );
		this[_color] = rgb;
		stdout.write( makeANSI( [ '38', '2', rgb[ 0 ], rgb[ 1 ], rgb[ 2 ] ] ) );
	}

	public static background( color: BgColorParam_T ): void {
		typeCheck( 'background', [ 'string', 'number', 'object' ], color );
		this[_bg] = color;
		stdout.write( colorConvertor( 'background', 'bg', color ) );
	}

	/**
	 * @deprecated
	**/
	public static backgroundRGB( red: number, green: number, blue: number ): void {
		this[_bg] = [red, green, blue];
		stdout.write( makeANSI( [ '48', '2', red, green, blue ] ) );
	}

	/**
	 * @deprecated
	**/
	public static backgroundHex( hex: string ): void {
		if ( !isValidHex( hex ) ) {
			throw new TypeError( `Attr.backgroundHex: '${ hex }' is not valid Hex value.` );
		}
	
		const rgb = convertHexToRGB( hex );
		this[_bg] = rgb;
		stdout.write( makeANSI( [ '48', '2', rgb[ 0 ], rgb[ 1 ], rgb[ 2 ] ] ) );
	}

	public static style( style: ANSI_Style_T ): void {
		stdout.write( convertTextStyleToANSI( style ) );
		this[_fontStyle].push( style );
	}

	public static styleOff( style: ANSI_Style_T ): void {
		stdout.write( convertDisableTextStyleANSI( style ) );

		const index = this[_fontStyle].indexOf( style );
		if ( index !== -1 ) {
			this[_fontStyle].splice( index, 1 );
		}
	}

	public static move( x: number, y: number ): void {
		stdout.write( makeANSI( [ x, y ], 'f' ) );
	}

	public static moveCol( x: number ): void {
		stdout.write( makeANSI( [ x, 'G' ], '' ) );
	}

	public static moveHome(): void {
		stdout.write( makeANSI( [], 'H' ) );
	}

	public static cursorWalk( direction: ANSI_Cursor_Movement_T, value: number = 1 ): void {
		stdout.write( convertTextCursorMoveToANSI( direction, value ) );
	}

	public static cursorSave( mode: 'DEC' | 'SCO' = 'SCO' ): void {
		const code = ( mode === 'SCO' ) ? 's' : '7';
		stdout.write( makeANSI( [ code ], '' ) );
	}

	public static cursorRestore( mode: 'DEC' | 'SCO' = 'SCO' ): void {
		const code = ( mode === 'SCO' ) ? 'u' : '8';
		stdout.write( makeANSI( [ code ], '' ) );
	}

	public static cursorStyle( style: ANSI_Cursor_Style_T ): void {
		stdout.write( convertTextCursorStyleToANSI( style ) );
	}

	public static erase( mode: ANSI_Erase_T = 'entire' ): void {
		stdout.write( convertTextEraseToANSI( mode ) );
	}
}
