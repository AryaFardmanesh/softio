import { jest, describe, it, expect } from '@jest/globals';
import Attr from '../src/attributes';

describe( 'Testing attributes methods - Test Group', () => {
	describe( 'Testing .title accessor - Test Group', () => {
		it( 'should set & get the process.title correctly - Unit 1', () => {
			expect( Attr.title ).toBe( process.title );
		} );

		it( 'should set & get the process.title correctly - Unit 2', () => {
			const title = 'test';
			Attr.title = title;
			expect( process.title ).toBe( title );
		} );

		it( 'should set & get the process.title correctly - Unit 3', () => {
			const title = 'test';
			Attr.title = title;
			expect( process.title ).toBe( Attr.title );
		} );
	} );

	describe( 'Testing .width & .height getter - Test Group', () => {
		it( 'should get the screen size correctly - Unit 1', () => {
			expect( Attr.width ).toBe( process.stdout.columns );
		} );

		it( 'should get the screen size correctly - Unit 2', () => {
			process.stdout.columns = 200;
			expect( Attr.width ).toBe( 200 );
		} );

		it( 'should get the screen size correctly - Unit 3', () => {
			expect( Attr.height ).toBe( process.stdout.rows );
		} );

		it( 'should get the screen size correctly - Unit 4', () => {
			process.stdout.rows = 200;
			expect( Attr.height ).toBe( 200 );
		} );
	} );

	describe( 'Testing .reset method - Test Group', () => {
		it( 'should reset the graphics - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.reset();
			expect( spy ).toHaveBeenCalledWith( '\x1b[0m' );
		} );
	} );

	describe( 'Testing .color method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( 'black' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[30m' );
		} );

		it( 'should chage the text color - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( 18 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;5;18m' );
		} );

		it( 'should chage the text color - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( [ 20, 30, 40 ] );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;20;30;40m' );
		} );

		it( 'should chage the text color - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( '#FFFFFF' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .colorRGB method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.colorRGB( 10, 20, 30 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;10;20;30m' );
		} );
	} );

	describe( 'Testing .colorHex method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.colorHex( '#ffffff' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .background method - Test Group', () => {
		it( 'should chage the background - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( 'black' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[40m' );
		} );

		it( 'should chage the background - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( 18 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;5;18m' );
		} );

		it( 'should chage the background - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( [ 20, 30, 40 ] );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;20;30;40m' );
		} );

		it( 'should chage the background - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( '#FFFFFF' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .backgroundRGB method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.backgroundRGB( 10, 20, 30 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;10;20;30m' );
		} );
	} );

	describe( 'Testing .backgroundHex method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.backgroundHex( '#ffffff' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .style method - Test Group', () => {
		it( 'should chage the text style - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.style( 'bold' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1m' );
		} );
	} );
} );
