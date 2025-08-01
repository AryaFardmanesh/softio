import typeCheck from './utils/typecheck';
import { EventTypesT } from './main.d';

type InlineVoidFunctionT = () => void;

const events: {
	resize: null | InlineVoidFunctionT,
} = {
	resize: null,
};

export default class Events {
	public static addEventListener( type: EventTypesT, listener: InlineVoidFunctionT ): void {
		typeCheck( 'addEventListener', 'string', type );
		typeCheck( 'addEventListener', 'function', listener );

		events[ type ] = listener;

		process.stdout.on( type, listener );
	}

	public static removeEventListener( type: EventTypesT ): void {
		process.stdout.removeListener( type, events[ type ] as InlineVoidFunctionT );

		events[ type ] = null;
	}
}
