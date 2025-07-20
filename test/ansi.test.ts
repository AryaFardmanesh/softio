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

		it( 'should make the correct ansi code - Unit 16', () => {
			expect( () => {
				makeANSI( true as unknown as string[] );
			} ).toThrow( TypeError );
		} );

		it( 'should make the correct ansi code - Unit 17', () => {
			expect( () => {
				makeANSI( {} as unknown as string[] );
			} ).toThrow( TypeError );
		} );

		it( 'should make the correct ansi code - Unit 18', () => {
			expect( () => {
				makeANSI( [ [] ] as unknown as string[] );
			} ).toThrow( TypeError );
		} );

		it( 'should make the correct ansi code - Unit 19', () => {
			expect( () => {
				makeANSI( [ [ true ] ] as unknown as string[] );
			} ).toThrow( TypeError );
		} );

		it( 'should make the correct ansi code - Unit 20', () => {
			expect( () => {
				makeANSI( [ null ] as unknown as string[] );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing text color conversion functions to ANSI - Test Group', () => {
		it( 'should convert color to ansi correctly - Unit 1', () => {
			const actual = convertTextColorToANSI( 'black' );

			expect( actual ).toBe( '\x1B[30m' );
		} );

		it( 'should convert color to ansi correctly - Unit 2', () => {
			const actual = convertTextColorToANSI( 'white' );

			expect( actual ).toBe( '\x1B[37m' );
		} );

		it( 'should convert color to ansi correctly - Unit 3', () => {
			const actual = convertTextColorToANSI( 10 );

			expect( actual ).toBe( '\x1B[38;5;10m' );
		} );

		it( 'should convert color to ansi correctly - Unit 4', () => {
			const actual = convertTextColorToANSI( 58 );

			expect( actual ).toBe( '\x1B[38;5;58m' );
		} );

		it( 'should convert color to ansi correctly - Unit 5', () => {
			expect( () => {
				convertTextColorToANSI( 'test' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 6', () => {
			expect( () => {
				convertTextColorToANSI( 'blac' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 7', () => {
			expect( () => {
				convertTextColorToANSI( 'lack' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 8', () => {
			expect( () => {
				convertTextColorToANSI( 'Black' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 9', () => {
			expect( () => {
				convertTextColorToANSI( 256 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 10', () => {
			expect( () => {
				convertTextColorToANSI( -10 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 11', () => {
			expect( () => {
				convertTextColorToANSI( 11n as unknown as number );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing background color conversion functions to ANSI - Test Group', () => {
		it( 'should convert color to ansi correctly - Unit 1', () => {
			const actual = convertTextBackgroundToANSI( 'black' );

			expect( actual ).toBe( '\x1B[40m' );
		} );

		it( 'should convert color to ansi correctly - Unit 2', () => {
			const actual = convertTextBackgroundToANSI( 'white' );

			expect( actual ).toBe( '\x1B[47m' );
		} );

		it( 'should convert color to ansi correctly - Unit 3', () => {
			const actual = convertTextBackgroundToANSI( 10 );

			expect( actual ).toBe( '\x1B[48;5;10m' );
		} );

		it( 'should convert color to ansi correctly - Unit 4', () => {
			const actual = convertTextBackgroundToANSI( 58 );

			expect( actual ).toBe( '\x1B[48;5;58m' );
		} );

		it( 'should convert color to ansi correctly - Unit 5', () => {
			expect( () => {
				convertTextBackgroundToANSI( 'test' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 6', () => {
			expect( () => {
				convertTextBackgroundToANSI( 'blac' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 7', () => {
			expect( () => {
				convertTextBackgroundToANSI( 'lack' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 8', () => {
			expect( () => {
				convertTextBackgroundToANSI( 'Black' as 'black' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 9', () => {
			expect( () => {
				convertTextBackgroundToANSI( 256 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 10', () => {
			expect( () => {
				convertTextBackgroundToANSI( -10 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi correctly - Unit 11', () => {
			expect( () => {
				convertTextBackgroundToANSI( 11n as unknown as number );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing hex color conversion functions - Test Group', () => {
		it( 'should validation the hex code correctly - Unit 1', () => {
			expect( isValidHex( '#FFFFFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 2', () => {
			expect( isValidHex( 'FFFFFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 3', () => {
			expect( isValidHex( '#ffffff' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 4', () => {
			expect( isValidHex( 'ffffff' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 5', () => {
			expect( isValidHex( '#751D1D' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 6', () => {
			expect( isValidHex( '751D1D' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 7', () => {
			expect( isValidHex( '#751d1d' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 8', () => {
			expect( isValidHex( '751d1d' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 9', () => {
			expect( isValidHex( '#FFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 10', () => {
			expect( isValidHex( 'FFF' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 11', () => {
			expect( isValidHex( '#f8e' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 12', () => {
			expect( isValidHex( 'f8e' ) ).toBe( true );
		} );

		it( 'should validation the hex code correctly - Unit 13', () => {
			expect( isValidHex( '#f8' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 14', () => {
			expect( isValidHex( 'f8' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 15', () => {
			expect( isValidHex( '#f88d' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 16', () => {
			expect( isValidHex( 'f88d' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 17', () => {
			expect( isValidHex( '#ffg' ) ).toBe( false );
		} );

		it( 'should validation the hex code correctly - Unit 18', () => {
			expect( isValidHex( '#ffo' ) ).toBe( false );
		} );
	} );

	describe( 'Testing hex color conversion to RGB functions - Test Group', () => {
		it( 'should validation the hex code correctly - Unit 1', () => {
			expect( convertHexToRGB( '#FFFFFF' ) ).toEqual( [ 255, 255, 255 ] );
		} );

		it( 'should validation the hex code correctly - Unit 2', () => {
			expect( convertHexToRGB( 'FFFFFF' ) ).toEqual( [ 255, 255, 255 ] );
		} );

		it( 'should validation the hex code correctly - Unit 3', () => {
			expect( convertHexToRGB( '#FFF' ) ).toEqual( [ 255, 255, 255 ] );
		} );

		it( 'should validation the hex code correctly - Unit 4', () => {
			expect( convertHexToRGB( 'fff' ) ).toEqual( [ 255, 255, 255 ] );
		} );

		it( 'should validation the hex code correctly - Unit 5', () => {
			expect( convertHexToRGB( '#AAAAAA' ) ).toEqual( [ 170, 170, 170 ] );
		} );

		it( 'should validation the hex code correctly - Unit 6', () => {
			expect( convertHexToRGB( 'AAAAAA' ) ).toEqual( [ 170, 170, 170 ] );
		} );

		it( 'should validation the hex code correctly - Unit 7', () => {
			expect( convertHexToRGB( '#aaa' ) ).toEqual( [ 170, 170, 170 ] );
		} );

		it( 'should validation the hex code correctly - Unit 8', () => {
			expect( convertHexToRGB( 'aaa' ) ).toEqual( [ 170, 170, 170 ] );
		} );

		it( 'should validation the hex code correctly - Unit 9', () => {
			expect( () => {
				convertHexToRGB( 10 as unknown as string );
			} ).toThrow( TypeError );
		} );

		it( 'should validation the hex code correctly - Unit 10', () => {
			expect( () => {
				convertHexToRGB( true as unknown as string );
			} ).toThrow( TypeError );
		} );

		it( 'should validation the hex code correctly - Unit 11', () => {
			expect( () => {
				convertHexToRGB( '' );
			} ).toThrow( TypeError );
		} );

		it( 'should validation the hex code correctly - Unit 12', () => {
			expect( () => {
				convertHexToRGB( 'hello' );
			} ).toThrow( TypeError );
		} );

		it( 'should validation the hex code correctly - Unit 13', () => {
			expect( () => {
				convertHexToRGB( '#helloo' );
			} ).toThrow( TypeError );
		} );

		it( 'should validation the hex code correctly - Unit 14', () => {
			expect( () => {
				convertHexToRGB( '#FFG' );
			} ).toThrow( TypeError );
		} );

		it( 'should validation the hex code correctly - Unit 15', () => {
			expect( () => {
				convertHexToRGB( 'FFG' );
			} ).toThrow( TypeError );
		} );

		it( 'should validation the hex code correctly - Unit 16', () => {
			expect( () => {
				convertHexToRGB( '0000' );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing style conversion functions to ANSI - Test Group', () => {
		it( 'should convert style to ansi correctly - Unit 1', () => {
			const actual = convertTextStyleToANSI( 'dim' );

			expect( actual ).toBe( '\x1B[2m' );
		} );

		it( 'should convert style to ansi correctly - Unit 2', () => {
			const actual = convertTextStyleToANSI( 'strikethrough' );

			expect( actual ).toBe( '\x1B[9m' );
		} );

		it( 'should convert style to ansi correctly - Unit 3', () => {
			const actual = convertTextStyleToANSI( 'bold' );

			expect( actual ).toBe( '\x1B[1m' );
		} );

		it( 'should convert style to ansi correctly - Unit 4', () => {
			const actual = convertTextStyleToANSI( 'reverse' );

			expect( actual ).toBe( '\x1B[7m' );
		} );

		it( 'should convert style to ansi correctly - Unit 5', () => {
			expect( () => {
				convertTextStyleToANSI( 'test' as 'bold' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert style to ansi correctly - Unit 6', () => {
			expect( () => {
				convertTextStyleToANSI( 'bol' as 'bold' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert style to ansi correctly - Unit 7', () => {
			expect( () => {
				convertTextStyleToANSI( 'old' as 'bold' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert style to ansi correctly - Unit 8', () => {
			expect( () => {
				convertTextStyleToANSI( 'Bold' as 'bold' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert style to ansi correctly - Unit 9', () => {
			expect( () => {
				convertTextStyleToANSI( 256 as unknown as 'bold' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert style to ansi correctly - Unit 10', () => {
			expect( () => {
				convertTextStyleToANSI( -10 as unknown as 'bold' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert style to ansi correctly - Unit 11', () => {
			expect( () => {
				convertTextStyleToANSI( 11n as unknown as 'bold' );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing cursor movement conversion functions to ANSI - Test Group', () => {
		it( 'should convert cursor code to ansi code correctly - Unit 1', () => {
			const actual = convertTextCursorMoveToANSI( 'up', 0 );

			expect( actual ).toBe( '\x1B[0;A' );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 2', () => {
			const actual = convertTextCursorMoveToANSI( 'right', 10 );

			expect( actual ).toBe( '\x1B[10;C' );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 3', () => {
			const actual = convertTextCursorMoveToANSI( 'home', 0 );

			expect( actual ).toBe( '\x1B[H' );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 4', () => {
			expect( () => {
				convertTextCursorMoveToANSI( 'test' as 'home', 0 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 5', () => {
			expect( () => {
				convertTextCursorMoveToANSI( 'Home' as 'home', 0 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 6', () => {
			expect( () => {
				convertTextCursorMoveToANSI( null as unknown as 'home', 0 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 7', () => {
			expect( () => {
				convertTextCursorMoveToANSI( 'home', true as unknown as number );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 8', () => {
			expect( () => {
				convertTextCursorMoveToANSI( 'home', 10n as unknown as number );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing cursor style conversion functions to ANSI - Test Group', () => {
		it( 'should convert cursor code to ansi code correctly - Unit 1', () => {
			const actual = convertTextCursorStyleToANSI( 'visible' );

			expect( actual ).toBe( '\x1B[?25h' );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 2', () => {
			const actual = convertTextCursorStyleToANSI( 'invisible' );

			expect( actual ).toBe( '\x1B[?25l' );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 3', () => {
			expect( () => {
				convertTextCursorStyleToANSI( 'test' as 'visible' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 4', () => {
			expect( () => {
				convertTextCursorStyleToANSI( 'Visible' as 'visible' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 5', () => {
			expect( () => {
				convertTextCursorStyleToANSI( null as unknown as 'visible' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 6', () => {
			expect( () => {
				convertTextCursorStyleToANSI( true as unknown as 'visible' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert cursor code to ansi code correctly - Unit 7', () => {
			expect( () => {
				convertTextCursorStyleToANSI( 10n as unknown as 'visible' );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing erase conversion functions to ANSI - Test Group', () => {
		it( 'should convert erase code to ansi correctly - Unit 1', () => {
			const actual = convertTextEraseToANSI( 'entire' );

			expect( actual ).toBe( '\x1B[2J' );
		} );

		it( 'should convert erase code to ansi correctly - Unit 2', () => {
			const actual = convertTextEraseToANSI( 'in-display' );

			expect( actual ).toBe( '\x1B[J' );
		} );

		it( 'should convert erase code to ansi correctly - Unit 3', () => {
			const actual = convertTextEraseToANSI( 'start-line-until-cursor' );

			expect( actual ).toBe( '\x1B[1K' );
		} );

		it( 'should convert erase code to ansi correctly - Unit 4', () => {
			const actual = convertTextEraseToANSI( 'entire-line' );

			expect( actual ).toBe( '\x1B[2K' );
		} );

		it( 'should convert erase code to ansi correctly - Unit 5', () => {
			expect( () => {
				convertTextEraseToANSI( 'test' as 'entire' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert erase code to ansi correctly - Unit 6', () => {
			expect( () => {
				convertTextEraseToANSI( 'entir' as 'entire' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert erase code to ansi correctly - Unit 7', () => {
			expect( () => {
				convertTextEraseToANSI( 'ntire' as 'entire' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert erase code to ansi correctly - Unit 8', () => {
			expect( () => {
				convertTextEraseToANSI( 'Entire' as 'entire' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert erase code to ansi correctly - Unit 9', () => {
			expect( () => {
				convertTextEraseToANSI( 8 as unknown as 'entire' );
			} ).toThrow( TypeError );
		} );
	} );
} );
