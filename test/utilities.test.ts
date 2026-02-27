import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import TestUtils from './utils';
import Utilities from '../src/utilities';
import { backgroundColors, fonts, resetFonts, textColors } from '../src/var/ansi';
import { ANSI_Color_T, ANSI_Style_T } from '../src/main.d';

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
			expect( Utilities.clear() ).toBe( ANSIClear );
		} );
	} );

	describe( 'Testing .reset method - Test Group', () => {
		const ANSIReset = `\x1b[0m`;

		it( 'should reset the graphical with ANSI code - Unit 1', () => {
			expect( Utilities.reset() ).toBe( ANSIReset );
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
			const actual = Utilities.color( '#FFF' );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );

		it( 'should change color with ANSI code - Unit 10', () => {
			const actual = Utilities.color( '#fff' );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );
	} );

	describe( 'Testing .colorRGB method - Test Group', () => {
		it( 'should change color rgb with ANSI code - Unit 1', () => {
			const actual = Utilities.colorRGB( 20, 30, 40 );
			expect( actual ).toBe( `\x1b[38;2;20;30;40m` );
		} );

		it( 'should change color rgb with ANSI code - Unit 2', () => {
			const actual = Utilities.colorRGB( 0, 0, 0 );
			expect( actual ).toBe( `\x1b[38;2;0;0;0m` );
		} );

		it( 'should change color rgb with ANSI code - Unit 3', () => {
			const actual = Utilities.colorRGB( 255, 255, 255 );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );

		it( 'should change color rgb with ANSI code - Fuzzing - Unit 4', () => {
			for ( let i = 0; i < 1000; i++ ) {
				const red = TestUtils.random( 0, 256 );
				const green = TestUtils.random( 0, 256 );
				const blue = TestUtils.random( 0, 256 );

				const expected = `\x1b[38;2;${ red };${ green };${ blue }m`;
				const actual = Utilities.colorRGB( red, green, blue );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .colorHex method - Test Group', () => {
		it( 'should change color hex with ANSI code - Unit 1', () => {
			const actual = Utilities.colorHex( '#FFFFFF' );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );

		it( 'should change color hex with ANSI code - Unit 2', () => {
			const actual = Utilities.colorHex( '#FFF' );
			expect( actual ).toBe( `\x1b[38;2;255;255;255m` );
		} );

		it( 'should change color hex with ANSI code - Unit 3', () => {
			const actual = Utilities.colorHex( '#F8c' );
			expect( actual ).toBe( `\x1b[38;2;255;136;204m` );
		} );

		it( 'should change color hex with ANSI code - Fuzzing - Unit 4', () => {
			for ( let i = 0; i < 1000; i++ ) {
				const chance = TestUtils.random( 0, 2 );
				let hex, red, green, blue;

				if ( chance ) {
					hex = TestUtils.randomHex( 3 );
					red = Number( '0x' + hex[ 1 ] + hex[ 1 ] );
					green = Number( '0x' + hex[ 2 ] + hex[ 2 ] );
					blue = Number( '0x' + hex[ 3 ] + hex[ 3 ] );
				}else {
					hex = TestUtils.randomHex( 6 );
					red = Number( '0x' + hex[ 1 ] + hex[ 2 ] );
					green = Number( '0x' + hex[ 3 ] + hex[ 4 ] );
					blue = Number( '0x' + hex[ 5 ] + hex[ 6 ] );
				}

				const expected = `\x1B[38;2;${ red };${ green };${ blue }m`;
				const actual = Utilities.colorHex( hex );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .colorAnsi256 method - Test Group', () => {
		it( 'should change color ansi 256 with ANSI code - Unit 1', () => {
			const actual = Utilities.colorAnsi256( 0 );
			expect( actual ).toBe( `\x1b[38;5;0m` );
		} );

		it( 'should change color ansi 256 with ANSI code - Unit 2', () => {
			const actual = Utilities.colorAnsi256( 255 );
			expect( actual ).toBe( `\x1b[38;5;255m` );
		} );

		it( 'should change color ansi 256 with ANSI code - Unit 3', () => {
			const actual = Utilities.colorAnsi256( 18 );
			expect( actual ).toBe( `\x1b[38;5;18m` );
		} );

		it( 'should change color ansi 256 with ANSI code - Fuzzing - Unit 4', () => {
			for ( let i = 0; i < 1000; i++ ) {
				const ansi256 = TestUtils.random( 0, 256 );
				const expected = `\x1B[38;5;${ ansi256 }m`;
				const actual = Utilities.colorAnsi256( ansi256 );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .colorName method - Test Group', () => {
		it( 'should change color with ANSI code - Unit 1', () => {
			const actual = Utilities.colorName( 'black' );
			expect( actual ).toBe( textColors.black );
		} );

		it( 'should change color with ANSI code - Unit 2', () => {
			const actual = Utilities.colorName( 'default' );
			expect( actual ).toBe( textColors.default );
		} );

		it( 'should change color with ANSI code - Unit 3', () => {
			const actual = Utilities.colorName( '@test' as 'black' );
			expect( actual ).toBe( textColors.default );
		} );

		it( 'should change color with ANSI code - Fuzzing - Unit 4', () => {
			const colorsName = Object.keys( textColors );
			const colorsValue = Object.values( textColors );

			for ( let i = 0; i < 1000; i++ ) {
				const selected = TestUtils.random( 0, colorsName.length );
				const expected = colorsValue[ selected ];
				const actual = Utilities.colorName( colorsName[ selected ] as ANSI_Color_T );

				expect( actual ).toBe( expected );
			}
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
			const actual = Utilities.background( '#FFF' );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );

		it( 'should change background with ANSI code - Unit 10', () => {
			const actual = Utilities.background( '#fff' );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );
	} );

	describe( 'Testing .backgroundRGB method - Test Group', () => {
		it( 'should change background rgb with ANSI code - Unit 1', () => {
			const actual = Utilities.backgroundRGB( 20, 30, 40 );
			expect( actual ).toBe( `\x1b[48;2;20;30;40m` );
		} );

		it( 'should change background rgb with ANSI code - Unit 2', () => {
			const actual = Utilities.backgroundRGB( 0, 0, 0 );
			expect( actual ).toBe( `\x1b[48;2;0;0;0m` );
		} );

		it( 'should change background rgb with ANSI code - Unit 3', () => {
			const actual = Utilities.backgroundRGB( 255, 255, 255 );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );

		it( 'should change background rgb with ANSI code - Fuzzing - Unit 4', () => {
			for ( let i = 0; i < 1000; i++ ) {
				const red = TestUtils.random( 0, 256 );
				const green = TestUtils.random( 0, 256 );
				const blue = TestUtils.random( 0, 256 );

				const expected = `\x1b[48;2;${ red };${ green };${ blue }m`;
				const actual = Utilities.backgroundRGB( red, green, blue );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .backgroundHex method - Test Group', () => {
		it( 'should change background hex with ANSI code - Unit 1', () => {
			const actual = Utilities.backgroundHex( '#FFFFFF' );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );

		it( 'should change background hex with ANSI code - Unit 2', () => {
			const actual = Utilities.backgroundHex( '#FFF' );
			expect( actual ).toBe( `\x1b[48;2;255;255;255m` );
		} );

		it( 'should change background hex with ANSI code - Unit 3', () => {
			const actual = Utilities.backgroundHex( '#F8c' );
			expect( actual ).toBe( `\x1b[48;2;255;136;204m` );
		} );

		it( 'should change background hex with ANSI code - Fuzzing - Unit 4', () => {
			for ( let i = 0; i < 1000; i++ ) {
				const chance = TestUtils.random( 0, 2 );
				let hex, red, green, blue;

				if ( chance ) {
					hex = TestUtils.randomHex( 3 );
					red = Number( '0x' + hex[ 1 ] + hex[ 1 ] );
					green = Number( '0x' + hex[ 2 ] + hex[ 2 ] );
					blue = Number( '0x' + hex[ 3 ] + hex[ 3 ] );
				}else {
					hex = TestUtils.randomHex( 6 );
					red = Number( '0x' + hex[ 1 ] + hex[ 2 ] );
					green = Number( '0x' + hex[ 3 ] + hex[ 4 ] );
					blue = Number( '0x' + hex[ 5 ] + hex[ 6 ] );
				}

				const expected = `\x1B[48;2;${ red };${ green };${ blue }m`;
				const actual = Utilities.backgroundHex( hex );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .backgroundAnsi256 method - Test Group', () => {
		it( 'should change background ansi 256 with ANSI code - Unit 1', () => {
			const actual = Utilities.backgroundAnsi256( 0 );
			expect( actual ).toBe( `\x1b[48;5;0m` );
		} );

		it( 'should change background ansi 256 with ANSI code - Unit 2', () => {
			const actual = Utilities.backgroundAnsi256( 255 );
			expect( actual ).toBe( `\x1b[48;5;255m` );
		} );

		it( 'should change background ansi 256 with ANSI code - Unit 3', () => {
			const actual = Utilities.backgroundAnsi256( 18 );
			expect( actual ).toBe( `\x1b[48;5;18m` );
		} );

		it( 'should change background ansi 256 with ANSI code - Fuzzing - Unit 4', () => {
			for ( let i = 0; i < 1000; i++ ) {
				const ansi256 = TestUtils.random( 0, 256 );
				const expected = `\x1B[48;5;${ ansi256 }m`;
				const actual = Utilities.backgroundAnsi256( ansi256 );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .backgroundName method - Test Group', () => {
		it( 'should change background with ANSI code - Unit 1', () => {
			const actual = Utilities.backgroundName( 'black' );
			expect( actual ).toBe( backgroundColors.black );
		} );

		it( 'should change background with ANSI code - Unit 2', () => {
			const actual = Utilities.backgroundName( 'default' );
			expect( actual ).toBe( backgroundColors.default );
		} );

		it( 'should change background with ANSI code - Unit 3', () => {
			const actual = Utilities.backgroundName( '@test' as 'black' );
			expect( actual ).toBe( backgroundColors.default );
		} );

		it( 'should change background with ANSI code - Fuzzing - Unit 4', () => {
			const colorsName = Object.keys( backgroundColors );
			const colorsValue = Object.values( backgroundColors );

			for ( let i = 0; i < 1000; i++ ) {
				const selected = TestUtils.random( 0, colorsName.length );
				const expected = colorsValue[ selected ];
				const actual = Utilities.backgroundName( colorsName[ selected ] as ANSI_Color_T );

				expect( actual ).toBe( expected );
			}
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

		it( 'should change the font style with ANSI code - Fuzzing - Unit 6', () => {
			const fontsName = Object.keys( fonts );
			const fontsValue = Object.values( fonts );

			for ( let i = 0; i < 1000; i++ ) {
				const selected = TestUtils.random( 0, fontsName.length );
				const expected = fontsValue[ selected ];
				const actual = Utilities.fontStyle( fontsName[ selected ] as ANSI_Style_T );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .fontStyleReset method - Test Group', () => {
		it( 'should change the font style with ANSI code - Unit 1', () => {
			const actual = Utilities.fontStyleReset( 'bold' );
			expect( actual ).toBe( `\x1b[22m` );
		} );

		it( 'should change the font style with ANSI code - Unit 2', () => {
			const actual = Utilities.fontStyleReset( 'strikethrough' );
			expect( actual ).toBe( `\x1b[29m` );
		} );

		it( 'should change the font style with ANSI code - Unit 3', () => {
			const actual = Utilities.fontStyleReset( 'dim' );
			expect( actual ).toBe( `\x1b[22m` );
		} );

		it( 'should change the font style with ANSI code - Unit 4', () => {
			const actual = Utilities.fontStyleReset( 'italic' );
			expect( actual ).toBe( `\x1b[23m` );
		} );

		it( 'should change the font style with ANSI code - Unit 5', () => {
			const actual = Utilities.fontStyleReset( 'reverse' );
			expect( actual ).toBe( `\x1b[27m` );
		} );

		it( 'should change the font style with ANSI code - Fuzzing - Unit 6', () => {
			const fontsName = Object.keys( resetFonts );
			const fontsValue = Object.values( resetFonts );

			for ( let i = 0; i < 1000; i++ ) {
				const selected = TestUtils.random( 0, fontsName.length );
				const expected = fontsValue[ selected ];
				const actual = Utilities.fontStyleReset( fontsName[ selected ] as ANSI_Style_T );

				expect( actual ).toBe( expected );
			}
		} );
	} );

	describe( 'Testing .prettier method - Test Group', () => {
		it( 'It must format the text correctly - Unit 1', () => {
			const spy = jest.spyOn( console, 'log' );
			Utilities.prettier( 'Hello world!' );
			expect( spy ).toHaveBeenCalledWith( 'Hello world!' );
		} );

		it( 'It must format the text correctly - Unit 2', () => {
			const spy = jest.spyOn( console, 'log' );
			Utilities.prettier( 'Test' );
			expect( spy ).toHaveBeenCalledWith( 'Hello world!' );
		} );

		it( 'It must format the text correctly - Fuzzing - Unit 3', () => {
			for ( let i = 0; i < 100; i++ ) {
				const strlen = TestUtils.random( 0, 50 );
				let str = '';

				for ( let j = 0; j < strlen; j++ ) {
					const chance = TestUtils.random( 0, 3 );

					if ( chance === 0 ) {
						str += TestUtils.randomChar( '0', '9' );
					}else if ( chance === 1 ) {
						str += TestUtils.randomChar( 'a', 'z' );
					}else if ( chance === 2 ) {
						str += TestUtils.randomChar( 'A', 'Z' );
					}
				}

				const spy = jest.spyOn( console, 'log' );
				Utilities.prettier( str );
				expect( spy ).toHaveBeenCalledWith( str );
			}
		} );
	} );
} );
