import formatMessage from './utils/formatmsg';
import silentEcho from './utils/silentecho';
import typeCheck from './utils/typecheck';
import { stdout } from './var/stdout';
import { stderr } from './var/stderr';

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
		message = formatMessage( message, ...argv );
		stdout.write( message );
	}

	public static error( message: string, ...argv: unknown[] ): void {
		typeCheck( 'error', 'string', message );
		message = formatMessage( message, ...argv );
		stderr.write( message );
	}
}
