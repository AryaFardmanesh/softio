import typeCheck from "./utils/type-check";

const enum eventTypes {
	close 		= 'close'	,
	error 		= 'error'	,
	prefinish 	= 'prefinish'	,
	finish 		= 'finish'	,
	drain 		= 'drain'	,
	data 		= 'data'	,
	end 		= 'end'		,
	readable 	= 'readable'	,
	resize 		= 'resize'	,
}

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

	Why: Basically, we discovered the _events object from
	within the NodeJS source code and wrote this code by
	studying and testing.
	Basically, there is no specific documentation for this
	object provided by NodeJS itself and there is no .d.ts
	file for process.stdout._events mentioned in TypeScript.
	So we have to define it ourselves.
*/
declare const process: NodeJS.Process & {
	stdout: {
		_events: INodeEvents
	}
};

const stdout = process.stdout;
const orginalEvents: INodeEvents = { ...stdout._events };
const events: INodeEvents = stdout._events;

export default {
	addEventListener( type: eventTypes, listener: Function ): void {
		typeCheck( 'addEventListener', 'string', type );
		typeCheck( 'addEventListener', 'function', listener );

		events[ type ] = function () {
			listener();
			if ( typeof orginalEvents[ type ] === 'function' ) {
				orginalEvents[ type ]();
			}
		};
	},

	removeEventListener( type: eventTypes ): void {
		events[ type ] = orginalEvents[ type ];
	},
};
