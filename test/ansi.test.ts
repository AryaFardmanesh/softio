import { describe, it, expect } from '@jest/globals';
import { makeANSI } from '../src/var/ansi/base';
import {
	convertTextColorToANSI,
	convertTextBackgroundToANSI,
	isValidHex,
	convertHexToRGB
} from '../src/var/ansi/color';
import {
	convertTextStyleToANSI
} from '../src/var/ansi/style';
import {
	convertTextCursorMoveToANSI,
	convertTextCursorStyleToANSI
} from '../src/var/ansi/cursor';
import {
	convertTextEraseToANSI
} from '../src/var/ansi/erase';

describe( 'Testing ANSI methods - Test Group', () => {
	describe( 'Testing makeANSI function - Test Group', () => {
		it( 'should make the correct ansi code - Unit 1', () => {
			const actual = makeANSI( [ 'test.ansi' ] );
			const expected = '\x1B[test.ansim';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 2', () => {
			const actual = makeANSI( [ 'test.ansi', 'hello' ] );
			const expected = '\x1B[test.ansi;hellom';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 3', () => {
			const actual = makeANSI( [ 'test.ansi', 'hello', 'test' ] );
			const expected = '\x1B[test.ansi;hello;testm';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 4', () => {
			const actual = makeANSI( [ 10 ] );
			const expected = '\x1B[10m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 5', () => {
			const actual = makeANSI( [ 10, 17 ] );
			const expected = '\x1B[10;17m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 6', () => {
			const actual = makeANSI( [ 10, 17, 3 ] );
			const expected = '\x1B[10;17;3m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 7', () => {
			const actual = makeANSI( [ 'ansi', 17, '3' ] );
			const expected = '\x1B[ansi;17;3m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 8', () => {
			const actual = makeANSI( [ 'ansi', 17, 3 ] );
			const expected = '\x1B[ansi;17;3m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 9', () => {
			const actual = makeANSI( [ 0, 'ansi', 17, 3 ] );
			const expected = '\x1B[0;ansi;17;3m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 10', () => {
			const actual = makeANSI( [] );
			const expected = '\x1B[m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 11', () => {
			const actual = makeANSI( [ 'ansi', 0 ], '@' );
			const expected = '\x1B[ansi;0@';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 12', () => {
			const actual = makeANSI( [ 'ansi', 0 ], undefined, '@' );
			const expected = '\x1B[@ansi;0m';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 13', () => {
			const actual = makeANSI( [ 'ansi', 0 ], '@', '@' );
			const expected = '\x1B[@ansi;0@';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 14', () => {
			const actual = makeANSI( [ 'ansi' ], '', '' );
			const expected = '\x1B[ansi';

			expect( actual ).toBe( expected );
		} );

		it( 'should make the correct ansi code - Unit 15', () => {
			const actual = makeANSI( [ 'ansi' ], '', 'test.' );
			const expected = '\x1B[test.ansi';

			expect( actual ).toBe( expected );
		} );
	} );

	describe( 'Testing color conversion functions to ANSI - Test Group', () => {
		it( 'should convert color to ansi correctly - Unit 1', () => {
			const actual = convertTextColorToANSI( 'black' );
			const expected = makeANSI( [ 30 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 2', () => {
			const actual = convertTextColorToANSI( 'bright-black' );
			const expected = makeANSI( [ 90 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 3', () => {
			const actual = convertTextColorToANSI( 19 );
			const expected = makeANSI( [ 38, 5, 19 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 4', () => {
			const actual = convertTextColorToANSI( 'cyan' );
			const expected = makeANSI( [ 36 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 5', () => {
			const actual = convertTextColorToANSI( <'black'>'none' );
			const expected = makeANSI( [ 39 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 6', () => {
			const actual = convertTextBackgroundToANSI( 'black' );
			const expected = makeANSI( [ 40 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 7', () => {
			const actual = convertTextBackgroundToANSI( 'bright-black' );
			const expected = makeANSI( [ 100 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 8', () => {
			const actual = convertTextBackgroundToANSI( 19 );
			const expected = makeANSI( [ 48, 5, 19 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 9', () => {
			const actual = convertTextBackgroundToANSI( 'cyan' );
			const expected = makeANSI( [ 46 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi correctly - Unit 10', () => {
			const actual = convertTextBackgroundToANSI( <'black'>'none' );
			const expected = makeANSI( [ 49 ] );

			expect( actual ).toBe( expected );
		} );
	} );

	describe( 'Testing hex color conversion functions to ANSI - Test Group', () => {
		it( 'should validation the hex code correctly - Unit 1', () => {
			expect( isValidHex( '#FFFFFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 2', () => {
			expect( isValidHex( 'FFFFFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 3', () => {
			expect( isValidHex( '#FFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 4', () => {
			expect( isValidHex( 'FFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 5', () => {
			expect( isValidHex( '#01ABef' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 6', () => {
			expect( isValidHex( '#FFFFFFF' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 7', () => {
			expect( isValidHex( 'FFFFFFF' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 8', () => {
			expect( isValidHex( '#FF' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 9', () => {
			expect( isValidHex( 'FF' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 10', () => {
			expect( isValidHex( '#01ABef0' ) ).toBe( false );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 11', () => {
			const actual = convertHexToRGB( '#FFFFFF' );
			const expected = [ 255, 255, 255 ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 12', () => {
			const actual = convertHexToRGB( 'FFFFFF' );
			const expected = [ 255, 255, 255 ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 13', () => {
			const actual = convertHexToRGB( '#000000' );
			const expected = [ 0, 0, 0 ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 14', () => {
			const actual = convertHexToRGB( '#0000000' );
			const expected = [ 255, 255, 255 ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 15', () => {
			const actual = convertHexToRGB( '#0FA' );
			const expected = [ 0, 255, 170 ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 16', () => {
			const actual = convertHexToRGB( '#0FZ' );
			const expected = [ 0, 255, NaN ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 17', () => {
			const actual = convertHexToRGB( '0FZ' );
			const expected = [ 0, 255, NaN ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 18', () => {
			const actual = convertHexToRGB( '0F8' );
			const expected = [ 0, 255, 136 ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 19', () => {
			const actual = convertHexToRGB( 'aaa' );
			const expected = [ 170, 170, 170 ];

			expect( actual ).toEqual( expected );
		} );

		it( 'should convert HEX color to RGB ansi correctly - Unit 20', () => {
			const actual = convertHexToRGB( 'fc8ea9' );
			const expected = [ 252, 142, 169 ];

			expect( actual ).toEqual( expected );
		} );
	} );

	describe( 'Testing style conversion functions to ANSI - Test Group', () => {
		it( 'should convert style to ansi code correctly - Unit 1', () => {
			const actual = convertTextStyleToANSI( 'bold' );
			const expected = makeANSI( [ 1 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 2', () => {
			const actual = convertTextStyleToANSI( 'dim' );
			const expected = makeANSI( [ 2 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 3', () => {
			const actual = convertTextStyleToANSI( 'italic' );
			const expected = makeANSI( [ 3 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 4', () => {
			const actual = convertTextStyleToANSI( 'underline' );
			const expected = makeANSI( [ 4 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 5', () => {
			const actual = convertTextStyleToANSI( 'blinking' );
			const expected = makeANSI( [ 5 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 6', () => {
			const actual = convertTextStyleToANSI( 'reverse' );
			const expected = makeANSI( [ 7 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 7', () => {
			const actual = convertTextStyleToANSI( 'hidden' );
			const expected = makeANSI( [ 8 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 8', () => {
			const actual = convertTextStyleToANSI( 'strikethrough' );
			const expected = makeANSI( [ 9 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 9', () => {
			const actual = convertTextStyleToANSI( <'bold'>'Bold' );
			const expected = makeANSI( [ 0 ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert style to ansi code correctly - Unit 10', () => {
			const actual = convertTextStyleToANSI( <'bold'>'none' );
			const expected = makeANSI( [ 0 ] );

			expect( actual ).toBe( expected );
		} );
	} );

	describe( 'Testing cursor conversion functions to ANSI - Test Group', () => {
		it( 'should convert cursor code to ansi code correctly - Unit 1', () => {
			const actual = convertTextCursorMoveToANSI( 'up', 0 );
			const expected = makeANSI( [ 0, 'A' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 2', () => {
			const actual = convertTextCursorMoveToANSI( 'down', 0 );
			const expected = makeANSI( [ 0, 'B' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 3', () => {
			const actual = convertTextCursorMoveToANSI( 'next', 0 );
			const expected = makeANSI( [ 0, 'E' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 4', () => {
			const actual = convertTextCursorMoveToANSI( 'previous', 10 );
			const expected = makeANSI( [ 10, 'F' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 5', () => {
			const actual = convertTextCursorMoveToANSI( 'go-up', 0 );
			const expected = makeANSI( [ 'M' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 6', () => {
			const actual = convertTextCursorMoveToANSI( <'up'>'other', 100 );
			const expected = makeANSI( [ 'H' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 7', () => {
			const actual = convertTextCursorMoveToANSI( <'up'>'none', -100 );
			const expected = makeANSI( [ 'H' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 8', () => {
			const actual = convertTextCursorStyleToANSI( 'invisible' );
			const expected = makeANSI( [ '25l' ], '', '?' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 9', () => {
			const actual = convertTextCursorStyleToANSI( 'visible' );
			const expected = makeANSI( [ '25h' ], '', '?' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 10', () => {
			const actual = convertTextCursorStyleToANSI( <'invisible'>'none' );
			const expected = makeANSI( [ '25h' ], '', '?' );

			expect( actual ).toBe( expected );
		} );
	} );

	describe( 'Testing erase conversion functions to ANSI - Test Group', () => {
		it( 'should convert erase code to ansi code correctly - Unit 1', () => {
			const actual = convertTextEraseToANSI( 'in-display' );
			const expected = makeANSI( [ 'J' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 2', () => {
			const actual = convertTextEraseToANSI( 'cursor-until-end' );
			const expected = makeANSI( [ '0J' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 3', () => {
			const actual = convertTextEraseToANSI( 'cursor-to-beginning' );
			const expected = makeANSI( [ '1J' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 4', () => {
			const actual = convertTextEraseToANSI( 'entire' );
			const expected = makeANSI( [ '2J' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 5', () => {
			const actual = convertTextEraseToANSI( 'saved-lines' );
			const expected = makeANSI( [ '3J' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 6', () => {
			const actual = convertTextEraseToANSI( 'in-line' );
			const expected = makeANSI( [ 'K' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 7', () => {
			const actual = convertTextEraseToANSI( 'cursor-until-end-line' );
			const expected = makeANSI( [ '0K' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 8', () => {
			const actual = convertTextEraseToANSI( 'start-line-until-cursor' );
			const expected = makeANSI( [ '1K' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 9', () => {
			const actual = convertTextEraseToANSI( 'entire-line' );
			const expected = makeANSI( [ '2K' ], '' );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert erase code to ansi code correctly - Unit 10', () => {
			const actual = convertTextEraseToANSI( <'in-display'>'none' );
			const expected = makeANSI( [ '2J' ], '' );

			expect( actual ).toBe( expected );
		} );
	} );
} );
