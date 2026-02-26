import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import Styler from '../src/styler';

describe( 'Testing styler methods - Test Group', () => {
	describe( 'Testing .color method - Test Group', () => {
		it( 'should make selected color to the text correctly - Unit 1', () => {
			const actual = Styler.color('#FFF')('Hello');
			expect( actual ).toBe( '\x1B[38;2;255;255;255mHello\x1B[39m\x1B[0m' );
		} );

		it( 'should make selected color to the text correctly - Unit 2', () => {
			const actual = Styler.blue('Hello');
			expect( actual ).toBe( '\x1B[34mHello\x1B[0m' );
		} );

		it( 'should make selected color to the text correctly - Unit 3', () => {
			const actual = Styler.red('Hello');
			expect( actual ).toBe( '\x1B[31mHello\x1B[0m' );
		} );

		it( 'should make selected color to the text correctly - Unit 4', () => {
			const actual = Styler.white('Hello');
			expect( actual ).toBe( '\x1B[37mHello\x1B[0m' );
		} );
	} );

	describe( 'Testing .background method - Test Group', () => {
		it( 'should make selected background color to the text correctly - Unit 1', () => {
			const actual = Styler.background('#FFF')('Hello');
			expect( actual ).toBe( '\x1B[48;2;255;255;255mHello\x1B[49m\x1B[0m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 2', () => {
			const actual = Styler.bgBlue('Hello');
			expect( actual ).toBe( '\x1B[44mHello\x1B[0m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 3', () => {
			const actual = Styler.bgRed('Hello');
			expect( actual ).toBe( '\x1B[41mHello\x1B[0m' );
		} );

		it( 'should make selected background color to the text correctly - Unit 4', () => {
			const actual = Styler.bgWhite('Hello');
			expect( actual ).toBe( '\x1B[47mHello\x1B[0m' );
		} );
	} );

	describe( 'Testing .font method - Test Group', () => {
		it( 'should make selected font to the text correctly - Unit 1', () => {
			const actual = Styler.bold('Hello');
			expect( actual ).toBe( '\x1B[1mHello\x1B[0m' );
		} );

		it( 'should make selected font to the text correctly - Unit 2', () => {
			const actual = Styler.italic('Hello');
			expect( actual ).toBe( '\x1B[3mHello\x1B[0m' );
		} );

		it( 'should make selected font to the text correctly - Unit 3', () => {
			const actual = Styler.reverse('Hello');
			expect( actual ).toBe( '\x1B[7mHello\x1B[0m' );
		} );

		it( 'should make selected font to the text correctly - Unit 4', () => {
			const actual = Styler.strikethrough('Hello');
			expect( actual ).toBe( '\x1B[9mHello\x1B[0m' );
		} );
	} );
} );
