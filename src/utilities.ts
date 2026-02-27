import { stdout } from './var/io';
import silentEcho from './utils/silentecho';
import {
	backgroundColors,
	convertHexToRGB,
	fonts,
	hexPattern,
	resetFonts,
	textColors
} from './var/ansi';
import {
	ANSI_Style_T,
	ColorParam_T,
	BgColorParam_T,
	ANSI_Color_T,
	ANSI_Background_T
} from './main.d';

export default class Utils {
	public static center( message: string ): string {
		const endSpace: number = ( stdout.columns / 2 ) - ( message.length / 2 );
		let centerMessage: string = '';

		// Columns start from one.
		for ( let i: number = 1; i <= endSpace; i++ ) {
			centerMessage += ' ';
		}
		centerMessage += message;

		return centerMessage;
	}

	public static clear(): string {
		return '\x1B[2J';
	}

	public static reset(): string {
		return '\x1B[0m';
	}

	public static color( color: ColorParam_T ): string {
		if ( Array.isArray( color ) ) {
			return `\x1B[38;2;${ color[0] };${ color[1] };${ color[2] }m`;
		}else if ( typeof color === 'number' ) {
			return `\x1B[38;5;${ color }m`;
		}else if ( hexPattern.test( color ) ) {
			const rgb = convertHexToRGB( color );
			return `\x1B[38;2;${ rgb[0] };${ rgb[1] };${ rgb[2] }m`;
		}

		const result = textColors[ color ];
		if ( result !== undefined ) {
			return result;
		}

		return textColors.default;
	}

	public static colorRGB( red: number, green: number, blue: number ): string {
		return `\x1B[38;2;${ red };${ green };${ blue }m`;
	}

	public static colorHex( hex: string ): string {
		const rgb = convertHexToRGB( hex );
		return `\x1B[38;2;${ rgb[ 0 ] };${ rgb[ 1 ] };${ rgb[ 2 ] }m`;
	}

	public static colorAnsi256( color: number ): string {
		return `\x1B[38;5;${ color }m`;
	}

	public static colorName( name: ANSI_Color_T ): string {
		const result = textColors[ name ];
		if ( result !== undefined ) {
			return result;
		}

		return textColors.default;
	}

	public static background( color: BgColorParam_T ): string {
		if ( Array.isArray( color ) ) {
			return `\x1B[48;2;${ color[0] };${ color[1] };${ color[2] }m`;
		}else if ( typeof color === 'number' ) {
			return `\x1B[48;5;${ color }m`;
		}else if ( hexPattern.test( color ) ) {
			const rgb = convertHexToRGB( color );
			return `\x1B[48;2;${ rgb[0] };${ rgb[1] };${ rgb[2] }m`;
		}

		const result = backgroundColors[ color ];
		if ( result !== undefined ) {
			return result;
		}

		return textColors.default;
	}

	public static backgroundRGB( red: number, green: number, blue: number ): string {
		return `\x1B[48;2;${ red };${ green };${ blue }m`;
	}

	public static backgroundHex( hex: string ): string {
		const rgb = convertHexToRGB( hex );
		return `\x1B[48;2;${ rgb[ 0 ] };${ rgb[ 1 ] };${ rgb[ 2 ] }m`;
	}

	public static backgroundAnsi256( color: number ): string {
		return `\x1B[48;5;${ color }m`;
	}

	public static backgroundName( name: ANSI_Background_T ): string {
		const result = backgroundColors[ name ];
		if ( result !== undefined ) {
			return result;
		}

		return backgroundColors.default;
	}

	public static fontStyle( style: ANSI_Style_T ): string {
		const result = fonts[ style ];

		if ( result !== undefined ) {
			return result;
		}

		return '';
	}

	public static fontStyleReset( style: ANSI_Style_T ): string {
		const result = resetFonts[ style ];

		if ( result !== undefined ) {
			return result;
		}

		return '';
	}

	public static prettier( ..._data: unknown[] ): string {
		return silentEcho( ...arguments );
	}
}
