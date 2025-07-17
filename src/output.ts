import formatMessage from './utils/formatmsg';
import silentEcho from './utils/silentecho';
import typeCheck from './utils/typecheck';
import { stdout } from './var/stdout';
import { stderr } from './var/stderr';
import { makeANSI } from './var/ansi/base';
import colorConvertor from './utils/colorconvertor';
import { convertTextStyleToANSI } from './var/ansi/style';
import {
	ShotStyleT,
	ANSI_Style_T
} from './main.d'

export default class Out {
	public static write( ...message: unknown[] ): void {
		const messageStr: string = silentEcho( ...message );
		stdout.write( messageStr );
	}

	public static writeln( ...message: unknown[] ): void {
		const messageStr: string = ( silentEcho( ...message ) + '\n' );
		stdout.write( messageStr );
	}

	public static printf( message: string, ...argv: unknown[] ): void {
		typeCheck( 'printf', 'string', message );
		message = formatMessage( message, argv );
		stdout.write( message );
	}

	public static error( message: string, ...argv: unknown[] ): void {
		typeCheck( 'error', 'string', message );
		message = formatMessage( message, argv );
		stderr.write( message );
	}

	public static shot<T extends Function>( func: T, style: ShotStyleT ): T {
		return <Function>( ( ...data: unknown[] ) => {

			const color = ( style.color ) ? colorConvertor( 'shot', 'color', style.color ) : '';
			const bg = ( style.background ) ? colorConvertor( 'shot', 'bg', style.background ) : '';
			const fstyle = ( style.style ) ? convertTextStyleToANSI( style.style as ANSI_Style_T ) : '';

			stdout.write( color + bg + fstyle );
			const result = func( ...data );
			stderr.write( makeANSI( [ '0' ] ) );

			return result;

		} ) as T;
	}
}
