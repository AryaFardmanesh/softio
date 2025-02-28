import { stdout } from './var/stdout';
import { makeANSI } from './var/ansi/base';
import {
	ANSI_Color_T,
	convertTextColorToANSI,
} from './var/ansi/color';

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
}
