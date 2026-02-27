import { describe, it, expect } from '@jest/globals';
import TestUtils from './utils';
import { Styler as StylerI } from '../src/main.d';
import Styler from '../src/styler';

const styler = Styler as typeof StylerI;

describe( 'Testing styler methods - Test Group', () => {
	describe( 'Testing .color method - Test Group', () => {
		it( 'should make selected color to the text correctly - Unit 1', () => {
			const actual = styler.color( '#FFF' )( 'Hello' );
			expect( actual ).toBe( '\x1B[38;2;255;255;255mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 2', () => {
			const actual = styler.color( 'black' )( 'Hello' );
			expect( actual ).toBe( '\x1B[30mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 3', () => {
			const actual = styler.black( 'Hello' );
			expect( actual ).toBe( '\x1B[30mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 4', () => {
			const actual = styler.red( 'Hello' );
			expect( actual ).toBe( '\x1B[31mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 5', () => {
			const actual = styler.green( 'Hello' );
			expect( actual ).toBe( '\x1B[32mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 6', () => {
			const actual = styler.yellow( 'Hello' );
			expect( actual ).toBe( '\x1B[33mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 7', () => {
			const actual = styler.blue( 'Hello' );
			expect( actual ).toBe( '\x1B[34mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 8', () => {
			const actual = styler.magenta( 'Hello' );
			expect( actual ).toBe( '\x1B[35mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 9', () => {
			const actual = styler.cyan( 'Hello' );
			expect( actual ).toBe( '\x1B[36mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 10', () => {
			const actual = styler.white( 'Hello' );
			expect( actual ).toBe( '\x1B[37mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 11', () => {
			const actual = styler.default( 'Hello' );
			expect( actual ).toBe( '\x1B[39mHello' );
		} );

		it( 'should make selected color to the text correctly - Unit 12', () => {
			const actual = styler.brightBlack( 'Hello' );
			expect( actual ).toBe( '\x1B[90mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 13', () => {
			const actual = styler.brightRed( 'Hello' );
			expect( actual ).toBe( '\x1B[91mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 14', () => {
			const actual = styler.brightGreen( 'Hello' );
			expect( actual ).toBe( '\x1B[92mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 15', () => {
			const actual = styler.brightYellow( 'Hello' );
			expect( actual ).toBe( '\x1B[93mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 16', () => {
			const actual = styler.brightBlue( 'Hello' );
			expect( actual ).toBe( '\x1B[94mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 17', () => {
			const actual = styler.brightMagenta( 'Hello' );
			expect( actual ).toBe( '\x1B[95mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 18', () => {
			const actual = styler.brightCyan( 'Hello' );
			expect( actual ).toBe( '\x1B[96mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 19', () => {
			const actual = styler.brightWhite( 'Hello' );
			expect( actual ).toBe( '\x1B[97mHello\x1B[39m' );
		} );

		it( 'should make selected color to the text correctly - Unit 20', () => {
			const actual = styler.blue.red( 'Hello' );
			expect( actual ).toBe( '\x1B[31m\x1B[34mHello\x1B[39m\x1B[39m' );
		} );
	} );

	describe( 'Testing .background method - Test Group', () => {
		it( 'should make selected background color to the text correctly - Unit 1', () => {
			const actual = styler.background( '#FFF' )( 'Hello' );
			expect( actual ).toBe( '\x1B[48;2;255;255;255mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 2', () => {
			const actual = styler.background( 'black' )( 'Hello' );
			expect( actual ).toBe( '\x1B[40mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 3', () => {
			const actual = styler.bgBlack( 'Hello' );
			expect( actual ).toBe( '\x1B[40mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 4', () => {
			const actual = styler.bgRed( 'Hello' );
			expect( actual ).toBe( '\x1B[41mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 5', () => {
			const actual = styler.bgGreen( 'Hello' );
			expect( actual ).toBe( '\x1B[42mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 6', () => {
			const actual = styler.bgYellow( 'Hello' );
			expect( actual ).toBe( '\x1B[43mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 7', () => {
			const actual = styler.bgBlue( 'Hello' );
			expect( actual ).toBe( '\x1B[44mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 8', () => {
			const actual = styler.bgMagenta( 'Hello' );
			expect( actual ).toBe( '\x1B[45mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 9', () => {
			const actual = styler.bgCyan( 'Hello' );
			expect( actual ).toBe( '\x1B[46mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 10', () => {
			const actual = styler.bgWhite( 'Hello' );
			expect( actual ).toBe( '\x1B[47mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 11', () => {
			const actual = styler.bgDefault( 'Hello' );
			expect( actual ).toBe( '\x1B[49mHello' );
		} );

		it( 'should make selected background color to the text correctly - Unit 12', () => {
			const actual = styler.bgBrightBlack( 'Hello' );
			expect( actual ).toBe( '\x1B[100mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 13', () => {
			const actual = styler.bgBrightRed( 'Hello' );
			expect( actual ).toBe( '\x1B[101mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 14', () => {
			const actual = styler.bgBrightGreen( 'Hello' );
			expect( actual ).toBe( '\x1B[102mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 15', () => {
			const actual = styler.bgBrightYellow( 'Hello' );
			expect( actual ).toBe( '\x1B[103mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 16', () => {
			const actual = styler.bgBrightBlue( 'Hello' );
			expect( actual ).toBe( '\x1B[104mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 17', () => {
			const actual = styler.bgBrightMagenta( 'Hello' );
			expect( actual ).toBe( '\x1B[105mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 18', () => {
			const actual = styler.bgBrightCyan( 'Hello' );
			expect( actual ).toBe( '\x1B[106mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 19', () => {
			const actual = styler.bgBrightWhite( 'Hello' );
			expect( actual ).toBe( '\x1B[107mHello\x1B[49m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 20', () => {
			const actual = styler.bgBlue.bgRed( 'Hello' );
			expect( actual ).toBe( '\x1B[41m\x1B[44mHello\x1B[49m\x1B[49m' );
		} );
	} );

	describe( 'Testing .fontStyle method - Test Group', () => {
		it( 'should make selected font to the text correctly - Unit 1', () => {
			const actual = styler.fontStyle( 'bold' )( 'Hello' );
			expect( actual ).toBe( '\x1B[1mHello\x1B[22m' );
		} );

		it( 'should make selected font to the text correctly - Unit 2', () => {
			const actual = styler.bold( 'Hello' );
			expect( actual ).toBe( '\x1B[1mHello\x1B[22m' );
		} );

		it( 'should make selected font to the text correctly - Unit 3', () => {
			const actual = styler.dim( 'Hello' );
			expect( actual ).toBe( '\x1B[2mHello\x1B[22m' );
		} );

		it( 'should make selected font to the text correctly - Unit 4', () => {
			const actual = styler.italic( 'Hello' );
			expect( actual ).toBe( '\x1B[3mHello\x1B[23m' );
		} );

		it( 'should make selected font to the text correctly - Unit 5', () => {
			const actual = styler.underline( 'Hello' );
			expect( actual ).toBe( '\x1B[4mHello\x1B[24m' );
		} );

		it( 'should make selected font to the text correctly - Unit 6', () => {
			const actual = styler.blinking( 'Hello' );
			expect( actual ).toBe( '\x1B[5mHello\x1B[25m' );
		} );

		it( 'should make selected font to the text correctly - Unit 7', () => {
			const actual = styler.reverse( 'Hello' );
			expect( actual ).toBe( '\x1B[7mHello\x1B[27m' );
		} );

		it( 'should make selected font to the text correctly - Unit 8', () => {
			const actual = styler.hidden( 'Hello' );
			expect( actual ).toBe( '\x1B[8mHello\x1B[28m' );
		} );

		it( 'should make selected font to the text correctly - Unit 9', () => {
			const actual = styler.strikethrough( 'Hello' );
			expect( actual ).toBe( '\x1B[9mHello\x1B[29m' );
		} );

		it( 'should make selected font to the text correctly - Unit 10', () => {
			const actual = styler.bold.reverse.italic( 'Hello' );
			expect( actual ).toBe( '\x1B[3m\x1B[7m\x1B[1mHello\x1B[22m\x1B[27m\x1B[23m' );
		} );
	} );

	describe( 'Testing .center method - Test Group', () => {
		it( 'should make selected font to the text correctly - Unit 1', () => {
			process.stdout.columns = 10;
			const actual = styler.center( 'Hello' );
			expect( actual ).toBe( '  Hello' );
		} );
	} );
} );
