import typeCheck from './utils/typecheck';

// This interface is for defining _events objects.
interface INodeEvents {
	close		: undefined | Function	,
	error		: undefined | Function	,
	prefinish	: undefined | Function	,
	finish		: undefined | Function	,
	drain		: undefined | Function	,
	data		: undefined | Function	,
	end		: undefined | Function	,
	readable	: undefined | Function	,
	resize		: undefined | Function	,
}

/*
	Declare: There is no mention of this function in the
	NodeJS documentation itself, so we have to
	define it ourselves.

	Why: Actually, we discovered the _events object from
	within the NodeJS source code and wrote this code by
	studying and testing.
	Basically, there is no specific documentation for this
	object provided by NodeJS itself and there is no .d.ts
	file for 'process.stdout._events' mentioned in TypeScript.
	So we have to define it ourselves.
*/
declare const process: NodeJS.Process & {
	stdout: {
		_events: INodeEvents
	}
};


declare type EventTypesT =
	'close' 	|
	'error' 	|
	'prefinish' 	|
	'finish' 	|
	'drain' 	|
	'data' 		|
	'end' 		|
	'readable' 	|
	'resize'
;

const stdout = process.stdout;
const orginalEvents: INodeEvents = { ...stdout._events };
const events: INodeEvents = stdout._events;

export default class Events {
	public static addEventListener( type: EventTypesT, listener: Function ): void {
		typeCheck( 'addEventListener', 'string', type );
		typeCheck( 'addEventListener', 'function', listener );

		events[ type ] = function () {
			listener();
			if ( typeof orginalEvents[ type ] === 'function' ) {
				orginalEvents[ type ]();
			}
		};
	}

	public static removeEventListener( type: EventTypesT ): void {
		events[ type ] = orginalEvents[ type ];
	}
}
