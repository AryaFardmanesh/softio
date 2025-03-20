import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import colorConvertor from '../src/utils/colorconvertor';
import typecheck from '../src/utils/typecheck';
import silentecho from '../src/utils/silentecho';
import formatmsg from '../src/utils/formatmsg';
import { convertHexToRGB, convertTextBackgroundToANSI, convertTextColorToANSI } from '../src/var/ansi/color';
import { makeANSI } from '../src/var/ansi/base';

beforeEach( () => {
	jest.spyOn( process.stdout, 'write' ).mockImplementationOnce( ( str ) => {
		return str as any;
	} );

	jest.spyOn( process.stderr, 'write' ).mockImplementationOnce( ( str ) => {
		return str as any;
	} );
} );

describe( 'Testing utils functions - Test Group', () => {
	describe( 'Testing colorconvertor function - Test Group', () => {
		it( 'should convert color to ansi code correctly - Unit 1', () => {
			const color = 'blue';
			const actual = colorConvertor( '$TEST$', 'color', convertTextColorToANSI, color );
			const expected = convertTextColorToANSI( color );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 2', () => {
			const color = 'red';
			const actual = colorConvertor( '$TEST$', 'bg', convertTextBackgroundToANSI, color );
			const expected = convertTextBackgroundToANSI( color );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 3', () => {
			const color = '#89FC9E';
			const rgbBase = convertHexToRGB( color );

			const actual = colorConvertor( '$TEST$', 'color', convertTextColorToANSI, color );
			const expected = makeANSI( [ '38', '2', rgbBase[ 0 ], rgbBase[ 1 ], rgbBase[ 2 ] ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 4', () => {
			const color = '#89FC9E';
			const rgbBase = convertHexToRGB( color );

			const actual = colorConvertor( '$TEST$', 'bg', convertTextBackgroundToANSI, color );
			const expected = makeANSI( [ '48', '2', rgbBase[ 0 ], rgbBase[ 1 ], rgbBase[ 2 ] ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 5', () => {
			const color = 156;
			const actual = colorConvertor( '$TEST$', 'color', convertTextColorToANSI, color );
			const expected = convertTextColorToANSI( color );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 6', () => {
			const color = 156;
			const actual = colorConvertor( '$TEST$', 'bg', convertTextBackgroundToANSI, color );
			const expected = convertTextBackgroundToANSI( color );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 7', () => {
			const color: [ number, number, number ] = [ 190, 200, 50 ];
			const actual = colorConvertor( '$TEST$', 'color', convertTextColorToANSI, color );
			const expected = makeANSI( [ '38', '2', color[ 0 ], color[ 1 ], color[ 2 ] ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 8', () => {
			const color: [ number, number, number ] = [ 190, 200, 50 ];
			const actual = colorConvertor( '$TEST$', 'bg', convertTextBackgroundToANSI, color );
			const expected = makeANSI( [ '48', '2', color[ 0 ], color[ 1 ], color[ 2 ] ] );

			expect( actual ).toBe( expected );
		} );

		it( 'should convert color to ansi code correctly - Unit 9', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', convertTextBackgroundToANSI, 256 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi code correctly - Unit 10', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', convertTextBackgroundToANSI, [ 0, 10, 300 ] );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing typecheck function - Test Group', () => {
		it( 'should throw an error if type is not match - Unit 1', () => {
			const data = 'text';
			expect( () => { typecheck( '$TEST$', 'string', data ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 2', () => {
			const data = 'text';
			expect( () => { typecheck( '$TEST$', 'number', data ) } ).toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 3', () => {
			const data = 'text';
			expect( () => { typecheck( '$TEST$', 'some', data ) } ).toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 4', () => {
			const data = 10;
			expect( () => { typecheck( '$TEST$', 'number', data ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 5', () => {
			const data = { id: 10 };
			expect( () => { typecheck( '$TEST$', 'object', data ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 6', () => {
			const data = 'text';
			expect( () => { typecheck( '$TEST$', [ 'string' ], data ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 7', () => {
			const data = 'text';
			expect( () => { typecheck( '$TEST$', [ 'number', 'string' ], data ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 8', () => {
			const data = 'text';
			expect( () => { typecheck( '$TEST$', [ 'string', 'number' ], data ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 9', () => {
			const data = () => {};
			expect( () => { typecheck( '$TEST$', [ 'number', 'function' ], data ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 10', () => {
			const data = { id: 10 };
			expect( () => { typecheck( '$TEST$', [ 'number', 'string' ], data ) } ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing silentecho function - Test Group', () => {
		it( 'It should format the string correctly - Unit 1', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ 'Hello' ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'It should format the string correctly - Unit 2', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ true ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'It should format the string correctly - Unit 3', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ 'Hello', { id: 10 } ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'It should format the string correctly - Unit 4', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ 'Hello', { id: 10 }, 10 ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'It should format the string correctly - Unit 5', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );
	} );

	describe( 'Testing formatmsg function - Test Group', () => {
		it( 'It should format the string correctly - Unit 1', () => {
			const message = 'text';
			const params = [];

			const expected = message;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'It should format the string correctly - Unit 2', () => {
			const message = 'text';
			const params = [ 'Hello' ];

			const expected = message;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'It should format the string correctly - Unit 3', () => {
			const message = '%v';
			const params = [ 'Hello' ];

			const expected = `${ silentecho( params[ 0 ] ) }`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'It should format the string correctly - Unit 4', () => {
			const message = '%v-%v';
			const params = [ 'Hello', true ];

			const expected = `${ silentecho( params[ 0 ] ) }-${ silentecho( params[ 1 ] ) }`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'It should format the string correctly - Unit 5', () => {
			const message = '%v-%v%v';
			const params = [ 'Hello', true /*, undefined */ ];

			const expected = `${ silentecho( params[ 0 ] ) }-${ silentecho( params[ 1 ] ) }${ silentecho( params[ 2 ] ) }`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );
	} );
} );
