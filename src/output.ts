import formatMessage from './utils/formatmsg';
import silentEcho from './utils/silentecho';
import {
	_bg,
	_color,
	_fontStyle
} from './var/attrSymbols';
import Attr from './attributes';
import Utils from './utilities';
import { stderr, stdout } from './var/io';
import {
	ShotStyleT
} from './main.d';

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
		message = formatMessage( message, argv );
		stdout.write( message );
	}

	public static error( message: string, ...argv: unknown[] ): void {
		message = formatMessage( message, argv );
		stderr.write( message );
	}

	public static shot<T extends Function>( func: T, style?: ShotStyleT ): T {
		return <Function>( ( ...data: unknown[] ) => {
			const color = ( style?.color ) ? Utils.color( style.color ) : '';
			const bg = ( style?.background ) ? Utils.background( style.background ) : '';
			const fstyle = ( style?.style ) ? Utils.fontStyle( style.style ) : '';

			stdout.write( color + bg + fstyle );
			const result = func( ...data );

			// Retrieve the styles
			Attr.background( Attr[ _bg ] );
			Attr.color( Attr[ _color ] );
			if ( style?.style ) Attr.styleReset( style.style );

			return result;
		} ) as T;
	}
}
