import { jest, describe, it, expect } from '@jest/globals';
import Events from '../src/events';

describe( 'Testing events methods - Test Group', () => {
	describe( 'Testing .addEventListener methods - Test Group', () => {
		it( 'should set events correctly - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'on' );

			const listener = () => {};
			Events.addEventListener( 'resize', listener );

			expect( spy ).toHaveBeenCalledWith( 'resize', listener );
		} );
	} );

	describe( 'Testing .removeEventListener methods - Test Group', () => {
		it( 'should remove the events correctly - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'removeListener' );

			const listener = () => {};
			Events.addEventListener( 'resize', listener );
			Events.removeEventListener( 'resize' );

			expect( spy ).toHaveBeenCalledWith( 'resize', listener );
		} );
	} );
} );
