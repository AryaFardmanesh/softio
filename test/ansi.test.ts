import { describe, it, expect } from '@jest/globals';
import TestUtils from './utils';
import {
	hexPattern,
	convertHexToRGB
} from '../src/var/ansi';

describe( 'Testing ANSI methods - Test Group', () => {
	describe( 'Testing hex pattern - Test Group', () => {
		it( 'It should correctly detect whether the string is hex code or not. - Unit 1', () => {
			const actual = hexPattern.test( '#FF00BB' );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 2', () => {
			const actual = hexPattern.test( '#ff00bb' );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 3', () => {
			const actual = hexPattern.test( '#Ff00Bb' );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 4', () => {
			const actual = hexPattern.test( '#FF0' );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 5', () => {
			const actual = hexPattern.test( '#ff0' );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 6', () => {
			const actual = hexPattern.test( '#Ff0' );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 7', () => {
			const actual = hexPattern.test( '#fF0' );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 8', () => {
			const actual = hexPattern.test( 'FF0088' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 9', () => {
			const actual = hexPattern.test( 'ff0088' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 10', () => {
			const actual = hexPattern.test( 'Ff0088' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 11', () => {
			const actual = hexPattern.test( 'fF0088' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 12', () => {
			const actual = hexPattern.test( 'FF0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 13', () => {
			const actual = hexPattern.test( 'ff0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 14', () => {
			const actual = hexPattern.test( 'fF0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 15', () => {
			const actual = hexPattern.test( 'Ff0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 16', () => {
			const actual = hexPattern.test( '#0FF0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 17', () => {
			const actual = hexPattern.test( '#0ff0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 18', () => {
			const actual = hexPattern.test( '#0Ff0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 19', () => {
			const actual = hexPattern.test( '#0fF0' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 20', () => {
			const actual = hexPattern.test( '#FF00880' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 21', () => {
			const actual = hexPattern.test( '#ff00880' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 22', () => {
			const actual = hexPattern.test( '#fF00880' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 23', () => {
			const actual = hexPattern.test( '#Ff00880' );
			expect( actual ).toBeFalsy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Unit 24', () => {
			const actual = hexPattern.test( TestUtils.randomHex() );
			expect( actual ).toBeTruthy();
		} );

		it( 'It should correctly detect whether the string is hex code or not. - Fuzzing - Unit 25', () => {
			for ( let i = 0; i < 1000; i++ ) {
				let len = 6;
				const chance = TestUtils.random( 0, 2 );

				if ( chance ) {
					len = 3;
				}

				const actual = hexPattern.test( TestUtils.randomHex( len ) );
				expect( actual ).toBeTruthy();
			}
		} );
	} );

	describe( 'Testing hex to rgb convert function - Test Group', () => {
		it ( 'It should convert the hex to rgb color correctly - Unit 1', () => {
			const actual = convertHexToRGB( '#FF00FF' );
			const expected = [ 255, 0, 255 ];

			expect( actual ).toEqual( expected );
		} );

		it ( 'It should convert the hex to rgb color correctly - Unit 2', () => {
			const actual = convertHexToRGB( '#ff00ff' );
			const expected = [ 255, 0, 255 ];

			expect( actual ).toEqual( expected );
		} );

		it ( 'It should convert the hex to rgb color correctly - Unit 3', () => {
			const actual = convertHexToRGB( '#fF00fF' );
			const expected = [ 255, 0, 255 ];

			expect( actual ).toEqual( expected );
		} );

		it ( 'It should convert the hex to rgb color correctly - Unit 4', () => {
			const actual = convertHexToRGB( '#F87788' );
			const expected = [ 248, 119, 136 ];

			expect( actual ).toEqual( expected );
		} );

		it ( 'It should convert the hex to rgb color correctly - Unit 5', () => {
			const actual = convertHexToRGB( '#f87788' );
			const expected = [ 248, 119, 136 ];

			expect( actual ).toEqual( expected );
		} );

		it ( 'It should convert the hex to rgb color correctly - Fuzzing - Unit 6', () => {
			for ( let i = 0; i < 1000; i++ ) {
				let red = TestUtils.random( 0, 256 ).toString( 16 );
				let green = TestUtils.random( 0, 256 ).toString( 16 );
				let blue = TestUtils.random( 0, 256 ).toString( 16 );
				let hex = '#';

				if ( red.length === 1 ) red = '0' + red;
				if ( green.length === 1 ) green = '0' + green;
				if ( blue.length === 1 ) blue = '0' + blue;

				hex += red;
				hex += green;
				hex += blue;

				const actual = convertHexToRGB( hex );
				const expected = [ red, green, blue ];

				expect( actual ).toEqual( actual );
			}
		} );
	} );
} );
