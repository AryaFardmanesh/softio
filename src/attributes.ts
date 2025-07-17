import { stdout } from './var/stdout';
import { makeANSI } from './var/ansi/base';
import {
	BgColorParam_T,
	ColorParam_T,
	convertHexToRGB,
	isValidHex
} from './var/ansi/color';
import {
	ANSI_Style_T,
	convertTextStyleToANSI
} from './var/ansi/style';
import {
	ANSI_Cursor_Movement_T,
	ANSI_Cursor_Style_T,
	convertTextCursorMoveToANSI,
	convertTextCursorStyleToANSI
} from './var/ansi/cursor';
import {
	ANSI_Erase_T,
	convertTextEraseToANSI
} from './var/ansi/erase';
import colorConvertor from './utils/colorconvertor';
import typeCheck from './utils/typecheck';

export default class Attr {
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
		stdout.write( colorConvertor( 'color', 'color', color ) );
	}

	/**
	 * @deprecated
	**/
	public static colorRGB( red: string | number, green: string | number, blue: string | number ): void {
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
		stdout.write( makeANSI( [ '38', '2', rgb[ 0 ], rgb[ 1 ], rgb[ 2 ] ] ) );
	}

	public static background( color: BgColorParam_T ): void {
		typeCheck( 'background', [ 'string', 'number', 'object' ], color );
		stdout.write( colorConvertor( 'background', 'bg', color ) );
	}

	/**
	 * @deprecated
	**/
	public static backgroundRGB( red: string | number, green: string | number, blue: string | number ): void {
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
		stdout.write( makeANSI( [ '48', '2', rgb[ 0 ], rgb[ 1 ], rgb[ 2 ] ] ) );
	}

	public static style( style: ANSI_Style_T ): void {
		stdout.write( convertTextStyleToANSI( style ) );
	}

	public static move( x: number | string, y: number | string ): void {
		stdout.write( makeANSI( [ x, y ], 'f' ) );
	}

	public static moveCol( x: number | string ): void {
		stdout.write( makeANSI( [ x, 'G' ], '' ) );
	}

	public static moveHome(): void {
		stdout.write( makeANSI( [], 'H' ) );
	}

	public static cursorWalk( arrow: ANSI_Cursor_Movement_T, value: number | string = 1 ): void {
		stdout.write( convertTextCursorMoveToANSI( arrow, value ) );
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

	public static erase( mode: ANSI_Erase_T ): void {
		stdout.write( convertTextEraseToANSI( mode ) );
	}
}
