import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import Events from '../src/events';

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

describe( 'Testing events methods - Test Group', () => {
	describe( 'Testing .addEventListener methods - Test Group', () => {
		it( 'should set events correctly - Unit 1', () => {
			let flag = false;

			Events.addEventListener( 'error', () => {
				flag = true;
			} );

			process.stdout._events.error?.call( undefined );

			expect( flag ).toBe( true );
		} );

		it( 'should set events correctly - Unit 2', () => {
			let flag = false;

			Events.addEventListener( 'resize', () => {
				flag = true;
			} );

			process.stdout._events.resize?.call( undefined );

			expect( flag ).toBe( true );
		} );
	} );

	describe( 'Testing .removeEventListener methods - Test Group', () => {
		it( 'should remove the events correctly - Unit 1', () => {
			let flag = false;

			Events.addEventListener( 'error', () => {
				flag = true;
			} );

			Events.removeEventListener( 'error' );

			process.stdout._events.error?.call( undefined );

			expect( flag ).toBe( false );
		} );

		it( 'should remove the events correctly - Unit 2', () => {
			let flag = false;

			Events.addEventListener( 'resize', () => {
				flag = true;
			} );

			Events.removeEventListener( 'resize' );

			process.stdout._events.resize?.call( undefined );

			expect( flag ).toBe( false );
		} );
	} );
} );
