import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import Utilities from '../src/utilities';
import { makeANSI } from '../src/var/ansi/base';
import colorConvertor from '../src/utils/colorconvertor';
import { convertTextBackgroundToANSI, convertTextColorToANSI } from '../src/var/ansi/color';
import { convertTextStyleToANSI } from '../src/var/ansi/style';

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
		const ANSIReset = makeANSI( [ '0' ] );

		it( 'should reset the graphical with ANSI code - Unit 1', () => {
			const actual = Utilities.reset();
			expect( actual ).toBe( ANSIReset );
		} );
	} );

	describe( 'Testing .color method - Test Group', () => {
		it( 'should change color with ANSI code - Unit 1', () => {
			const expected = colorConvertor( 'color', 'color', convertTextColorToANSI, 'red' );
			const actual = Utilities.color( 'red' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change color with ANSI code - Unit 2', () => {
			const expected = colorConvertor( 'color', 'color', convertTextColorToANSI, 18 );
			const actual = Utilities.color( 18 );
			expect( actual ).toBe( expected );
		} );

		it( 'should change color with ANSI code - Unit 3', () => {
			const expected = colorConvertor( 'color', 'color', convertTextColorToANSI, [ 15, 20, 10 ] );
			const actual = Utilities.color( [ 15, 20, 10 ] );
			expect( actual ).toBe( expected );
		} );

		it( 'should change color with ANSI code - Unit 4', () => {
			const expected = colorConvertor( 'color', 'color', convertTextColorToANSI, '#FFFC8EA' );
			const actual = Utilities.color( '#FFFC8EA' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change color with ANSI code - Unit 5', () => {
			const expected = colorConvertor( 'color', 'color', convertTextColorToANSI, '#FFF' );
			const actual = Utilities.color( '#FFF' );
			expect( actual ).toBe( expected );
		} );
	} );

	describe( 'Testing .background method - Test Group', () => {
		it( 'should change the background color with ANSI code - Unit 1', () => {
			const expected = colorConvertor( 'color', 'bg', convertTextBackgroundToANSI, 'red' );
			const actual = Utilities.background( 'red' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the background color with ANSI code - Unit 2', () => {
			const expected = colorConvertor( 'color', 'bg', convertTextBackgroundToANSI, 18 );
			const actual = Utilities.background( 18 );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the background color with ANSI code - Unit 3', () => {
			const expected = colorConvertor( 'color', 'bg', convertTextBackgroundToANSI, [ 15, 20, 10 ] );
			const actual = Utilities.background( [ 15, 20, 10 ] );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the background color with ANSI code - Unit 4', () => {
			const expected = colorConvertor( 'color', 'bg', convertTextBackgroundToANSI, '#FFFC8EA' );
			const actual = Utilities.background( '#FFFC8EA' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the background color with ANSI code - Unit 5', () => {
			const expected = colorConvertor( 'color', 'bg', convertTextBackgroundToANSI, '#FFF' );
			const actual = Utilities.background( '#FFF' );
			expect( actual ).toBe( expected );
		} );
	} );

	describe( 'Testing .fontStyle method - Test Group', () => {
		it( 'should change the font style with ANSI code - Unit 1', () => {
			const expected = convertTextStyleToANSI( 'bold' );
			const actual = Utilities.fontStyle( 'bold' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the font style with ANSI code - Unit 2', () => {
			const expected = convertTextStyleToANSI( 'strikethrough' );
			const actual = Utilities.fontStyle( 'strikethrough' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the font style with ANSI code - Unit 3', () => {
			const expected = convertTextStyleToANSI( 'dim' );
			const actual = Utilities.fontStyle( 'dim' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the font style with ANSI code - Unit 4', () => {
			const expected = convertTextStyleToANSI( 'italic' );
			const actual = Utilities.fontStyle( 'italic' );
			expect( actual ).toBe( expected );
		} );

		it( 'should change the font style with ANSI code - Unit 5', () => {
			const expected = convertTextStyleToANSI( 'reverse' );
			const actual = Utilities.fontStyle( 'reverse' );
			expect( actual ).toBe( expected );
		} );
	} );
} );
