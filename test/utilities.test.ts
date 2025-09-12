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

	describe( 'Testing .reset method - Test Group', () => {
		const ANSIReset = `\x1b[0m`;

		it( 'should reset the graphical with ANSI code - Unit 1', () => {
			const actual = Utilities.reset();
			expect( actual ).toBe( ANSIReset );
		} );
	} );

	describe( 'Testing .color method - Test Group', () => {
		it( 'should change color with ANSI code - Unit 1', () => {
			const actual = Utilities.color( 'red' );
			expect( actual ).toBe( `\x1b[31m` );
		} );

		it( 'should change color with ANSI code - Unit 2', () => {
			const actual = Utilities.color( 'blue' );
			expect( actual ).toBe( `\x1b[34m` );
		} );

		it( 'should change color with ANSI code - Unit 3', () => {
			const actual = Utilities.color( 18 );
			expect( actual ).toBe( `\x1b[38;5;18m` );
		} );

		it( 'should change color with ANSI code - Unit 4', () => {
			const actual = Utilities.color( 255 );
			expect( actual ).toBe( `\x1b[38;5;255m` );
		} );

		it( 'should change color with ANSI code - Unit 5', () => {
			const actual = Utilities.color( [ 15, 20, 10 ] );
			expect( actual ).toBe( `\x1b[38;2;15;20;10m` );
		} );

		it( 'should change color with ANSI code - Unit 6', () => {
			const actual = Utilities.color( [ 38, 225, 0 ] );
			expect( actual ).toBe( `\x1b[38;2;38;225;0m` );
		} );

		it( 'should change color with ANSI code - Unit 7', () => {
			const actual = Utilities.color( '#FFFC8E' );
			expect( actual ).toBe( `\x1b[38;2;255;252;142m` );
		} );

		it( 'should change color with ANSI code - Unit 8', () => {
			const actual = Utilities.color( '#fffc8e' );
			expect( actual ).toBe( `\x1b[38;2;255;252;142m` );
		} );

		it( 'should change color with ANSI code - Unit 9', () => {
			const actual = Utilities.color( 'fffc8e' );
			expect( actual ).toBe( `\x1b[38;2;255;252;142m` );
		} );

		it( 'should change color with ANSI code - Unit 10', () => {
			const actual = Utilities.color( '#FFF' );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );

		it( 'should change color with ANSI code - Unit 11', () => {
			const actual = Utilities.color( '#fff' );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );

		it( 'should change color with ANSI code - Unit 12', () => {
			const actual = Utilities.color( 'fff' );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );

		it( 'should throw an error with incorrect input - Unit 13', () => {
			expect( () => Utilities.color( 'test' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 14', () => {
			expect( () => Utilities.color( '#f' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 15', () => {
			expect( () => Utilities.color( 'f' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 16', () => {
			expect( () => Utilities.color( '#ffff' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 17', () => {
			expect( () => Utilities.color( 'ffff' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 18', () => {
			expect( () => Utilities.color( '#ffffffa' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 19', () => {
			expect( () => Utilities.color( 'ffffffa' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 20', () => {
			expect( () => Utilities.color( 300 ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 21', () => {
			expect( () => Utilities.color( -1 ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 22', () => {
			expect( () => Utilities.color( [ 10, 20, 256 ] ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 23', () => {
			expect( () => Utilities.color( [ 10, 20, -1 ] ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 24', () => {
			expect( () => Utilities.color( [ 10, 20 ] as unknown as [ number, number, number ] ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 25', () => {
			expect( () => Utilities.color( [ 10 ] as unknown as [ number, number, number ] ) ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing .background method - Test Group', () => {
		it( 'should change background with ANSI code - Unit 1', () => {
			const actual = Utilities.background( 'red' );
			expect( actual ).toBe( `\x1b[41m` );
		} );

		it( 'should change background with ANSI code - Unit 2', () => {
			const actual = Utilities.background( 'blue' );
			expect( actual ).toBe( `\x1b[44m` );
		} );

		it( 'should change background with ANSI code - Unit 3', () => {
			const actual = Utilities.background( 18 );
			expect( actual ).toBe( `\x1b[48;5;18m` );
		} );

		it( 'should change background with ANSI code - Unit 4', () => {
			const actual = Utilities.background( 255 );
			expect( actual ).toBe( `\x1b[48;5;255m` );
		} );

		it( 'should change background with ANSI code - Unit 5', () => {
			const actual = Utilities.background( [ 15, 20, 10 ] );
			expect( actual ).toBe( `\x1b[48;2;15;20;10m` );
		} );

		it( 'should change background with ANSI code - Unit 6', () => {
			const actual = Utilities.background( [ 38, 225, 0 ] );
			expect( actual ).toBe( `\x1b[48;2;38;225;0m` );
		} );

		it( 'should change background with ANSI code - Unit 7', () => {
			const actual = Utilities.background( '#FFFC8E' );
			expect( actual ).toBe( `\x1b[48;2;255;252;142m` );
		} );

		it( 'should change background with ANSI code - Unit 8', () => {
			const actual = Utilities.background( '#fffc8e' );
			expect( actual ).toBe( `\x1b[48;2;255;252;142m` );
		} );

		it( 'should change background with ANSI code - Unit 9', () => {
			const actual = Utilities.background( 'fffc8e' );
			expect( actual ).toBe( `\x1b[48;2;255;252;142m` );
		} );

		it( 'should change background with ANSI code - Unit 10', () => {
			const actual = Utilities.background( '#FFF' );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );

		it( 'should change background with ANSI code - Unit 11', () => {
			const actual = Utilities.background( '#fff' );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );

		it( 'should change background with ANSI code - Unit 12', () => {
			const actual = Utilities.background( 'fff' );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );

		it( 'should throw an error with incorrect input - Unit 13', () => {
			expect( () => Utilities.background( 'test' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 14', () => {
			expect( () => Utilities.background( '#f' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 15', () => {
			expect( () => Utilities.background( 'f' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 16', () => {
			expect( () => Utilities.background( '#ffff' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 17', () => {
			expect( () => Utilities.background( 'ffff' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 18', () => {
			expect( () => Utilities.background( '#ffffffa' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 19', () => {
			expect( () => Utilities.background( 'ffffffa' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 20', () => {
			expect( () => Utilities.background( 300 ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 21', () => {
			expect( () => Utilities.background( -1 ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 22', () => {
			expect( () => Utilities.background( [ 10, 20, 256 ] ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 23', () => {
			expect( () => Utilities.background( [ 10, 20, -1 ] ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 24', () => {
			expect( () => Utilities.background( [ 10, 20 ] as unknown as [ number, number, number ] ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 25', () => {
			expect( () => Utilities.background( [ 10 ] as unknown as [ number, number, number ] ) ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing .fontStyle method - Test Group', () => {
		it( 'should change the font style with ANSI code - Unit 1', () => {
			const actual = Utilities.fontStyle( 'bold' );
			expect( actual ).toBe( `\x1b[1m` );
		} );

		it( 'should change the font style with ANSI code - Unit 2', () => {
			const actual = Utilities.fontStyle( 'strikethrough' );
			expect( actual ).toBe( `\x1b[9m` );
		} );

		it( 'should change the font style with ANSI code - Unit 3', () => {
			const actual = Utilities.fontStyle( 'dim' );
			expect( actual ).toBe( `\x1b[2m` );
		} );

		it( 'should change the font style with ANSI code - Unit 4', () => {
			const actual = Utilities.fontStyle( 'italic' );
			expect( actual ).toBe( `\x1b[3m` );
		} );

		it( 'should change the font style with ANSI code - Unit 5', () => {
			const actual = Utilities.fontStyle( 'reverse' );
			expect( actual ).toBe( `\x1b[7m` );
		} );

		it( 'should throw an error with incorrect input - Unit 6', () => {
			expect( () => Utilities.fontStyle( 'test' as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 7', () => {
			expect( () => Utilities.fontStyle( 'hello' as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 8', () => {
			expect( () => Utilities.fontStyle( 12 as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 9', () => {
			expect( () => Utilities.fontStyle( [ 10, 20, 30 ] as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 10', () => {
			expect( () => Utilities.fontStyle( {} as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 11', () => {
			expect( () => Utilities.fontStyle( '#111' as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 12', () => {
			expect( () => Utilities.fontStyle( '111' as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 13', () => {
			expect( () => Utilities.fontStyle( '#ffffff' as unknown as 'bold' ) ).toThrow( TypeError );
		} );

		it( 'should throw an error with incorrect input - Unit 14', () => {
			expect( () => Utilities.fontStyle( 'ffffff' as unknown as 'bold' ) ).toThrow( TypeError );
		} );
	} );
} );
