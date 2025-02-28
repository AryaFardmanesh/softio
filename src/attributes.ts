import { stdout } from './var/stdout';
import { makeANSI } from './var/ansi/base';
import {
	ANSI_Background_T,
	ANSI_Color_T,
	convertHexToRGB,
	convertTextBackgroundToANSI,
	convertTextColorToANSI,
	isValidHex,
} from './var/ansi/color';
import {
	ANSI_Style_T,
	convertTextStyleToANSI
} from './var/ansi/style';
import {
	ANSI_Cursor_Movement_T,
	ANSI_Cursor_Style_T,
	convertTextCursorMoveToANSI,
	convertTextCursorStyleToANSI,
} from './var/ansi/cursor';

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

	public static color( color: ANSI_Color_T | number ): void {
		stdout.write( convertTextColorToANSI( color ) );
	}

	public static colorRGB( red: string | number, green: string | number, blue: string | number ): void {
		stdout.write( makeANSI( [ '38', '2', red, green, blue ] ) );
	}

	public static colorHex( hex: string ): void {
		if ( !isValidHex( hex ) ) {
			throw new TypeError( `Attr.colorHex: '${ hex }' is not valid Hex value.` );
		}
	
		const rgb = convertHexToRGB( hex );
		stdout.write( makeANSI( [ '38', '2', rgb[ 0 ], rgb[ 1 ], rgb[ 2 ] ] ) );
	}

	public static background( color: ANSI_Background_T | number ): void {
		stdout.write( convertTextBackgroundToANSI( color ) );
	}

	public static backgroundRGB( red: string | number, green: string | number, blue: string | number ): void {
		stdout.write( makeANSI( [ '48', '2', red, green, blue ] ) );
	}

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

	public static cursorSave( mode: 'DEC' | 'SCO' = 'DEC' ): void {
		const code = ( mode === 'DEC' ) ? '7' : 's';
		stdout.write( makeANSI( [ code ], '' ) );
	}
	
	public static cursorRestore( mode: 'DEC' | 'SCO' = 'DEC' ): void {
		const code = ( mode === 'DEC' ) ? '8' : 'u';
		stdout.write( makeANSI( [ code ], '' ) );
	}

	public static cursorStyle( style: ANSI_Cursor_Style_T ): void {
		stdout.write( convertTextCursorStyleToANSI( style ) );
	}
}
