import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import Utilities from '../src/utilities';

beforeEach( () => {
	jest.spyOn( process.stdout, 'write' ).mockImplementationOnce( ( str ) => {
		return str as any;
	} );

	jest.spyOn( process.stderr, 'write' ).mockImplementationOnce( ( str ) => {
		return str as any;
	} );
} );

function makeSpace( text: string, space: number ): string {
	let newText = '';

	for ( let i = 0; i < space; i++ ) {
		newText += ' ';
	}

	return ( newText + text );
}

describe( 'Testing utilities methods - Test Group', () => {
	describe( 'Testing .center method - Test Group', () => {
		it( 'should make center the text correctly - Unit 1', () => {
			// Simulate for small window to test easy.
			process.stdout.columns = 10;

			const text = `Hell`;
			const expected = makeSpace( text, 3 );
			const actual = Utilities.center( text );

			expect( actual ).toBe( expected );
		} );

		it( 'should make center the text correctly - Unit 2', () => {
			// Simulate for small window to test easy.
			process.stdout.columns = 10;

			const text = `Hello`;
			const expected = makeSpace( text, 2 );
			const actual = Utilities.center( text );

			expect( actual ).toBe( expected );
		} );

		it( 'should make center the text correctly - Unit 3', () => {
			// Simulate for small window to test easy.
			process.stdout.columns = 20;

			const text = `Hell`;
			const expected = makeSpace( text, 8 );
			const actual = Utilities.center( text );

			expect( actual ).toBe( expected );
		} );

		it( 'should make center the text correctly - Unit 4', () => {
			// Simulate for small window to test easy.
			process.stdout.columns = 40;

			const text = `test`;
			const expected = makeSpace( text, 18 );
			const actual = Utilities.center( text );

			expect( actual ).toBe( expected );
		} );

		it( 'should make center the text correctly - Unit 5', () => {
			// Simulate for small window to test easy.
			process.stdout.columns = 40;

			const text = `hello`;
			const expected = makeSpace( text, 17 );
			const actual = Utilities.center( text );

			expect( actual ).toBe( expected );
		} );
	} );

	describe( 'Testing .clear method - Test Group', () => {
		const ANSIClear = `\x1b[2J`;

		it( 'should clear the screen with ANSI code - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Utilities.clear();
			expect( spy ).toHaveBeenCalledWith( ANSIClear );
		} );
	} );
} );
