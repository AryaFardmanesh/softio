import typeCheck from './utils/typecheck';
import { stdout } from './var/stdout';
import { makeANSI } from './var/ansi/base';
import colorConvertor from './utils/colorconvertor';
import {convertTextStyleToANSI } from './var/ansi/style';
import silentEcho from './utils/silentecho';
import {
	ANSI_Background_T,
	ANSI_Color_T,
	ANSI_Style_T
} from './main.d';

export default class Utils {
	public static center( message: string ): string {
		typeCheck( 'center', 'string', message );

		const endSpace: number = ( stdout.columns / 2 ) - ( message.length / 2 );
		let centerMessage: string = '';

		// Columns start from one.
		for ( let i: number = 1; i <= endSpace; i++ ) {
			centerMessage += ' ';
		}
		centerMessage += message;

		return centerMessage;
	}

	public static clear(): void {
		stdout.write( '\x1b[2J' );
	}

	public static reset(): string {
		return makeANSI( [ '0' ] );
	}

	public static color( color: ANSI_Color_T | number | [number, number, number] | string ): string {
		typeCheck( 'color', [ 'string', 'number', 'object' ], color );
		return colorConvertor( 'color', 'color', color );
	}

	public static background( color: ANSI_Background_T | number | [number, number, number] | string ): string {
		typeCheck( 'color', [ 'string', 'number', 'object' ], color );
		return colorConvertor( 'background', 'bg', color );
	}

	public static fontStyle( style: ANSI_Style_T ): string {
		typeCheck( 'fontStyle', 'string', style );
		return convertTextStyleToANSI( style );
	}

	public static prettier( ..._data: unknown[] ): string {
		return silentEcho( ...arguments );
	}
}
