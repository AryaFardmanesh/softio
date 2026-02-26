import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import colorConvertor from '../src/utils/colorconvertor';
import typecheck from '../src/utils/typecheck';
import silentecho from '../src/utils/silentecho';
import formatmsg from '../src/utils/formatmsg';

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
			const actual = colorConvertor( '$TEST$', 'color', 'blue' );

			expect( actual ).toBe( '\x1B[34m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 2', () => {
			const actual = colorConvertor( '$TEST$', 'bg', 'blue' );

			expect( actual ).toBe( '\x1B[44m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 3', () => {
			const actual = colorConvertor( '$TEST$', 'color', 'yellow' );

			expect( actual ).toBe( '\x1B[33m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 4', () => {
			const actual = colorConvertor( '$TEST$', 'bg', 'yellow' );

			expect( actual ).toBe( '\x1B[43m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 5', () => {
			const actual = colorConvertor( '$TEST$', 'color', 10 );

			expect( actual ).toBe( '\x1B[38;5;10m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 6', () => {
			const actual = colorConvertor( '$TEST$', 'bg', 10 );

			expect( actual ).toBe( '\x1B[48;5;10m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 7', () => {
			const actual = colorConvertor( '$TEST$', 'color', 250 );

			expect( actual ).toBe( '\x1B[38;5;250m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 8', () => {
			const actual = colorConvertor( '$TEST$', 'bg', 250 );

			expect( actual ).toBe( '\x1B[48;5;250m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 9', () => {
			const actual = colorConvertor( '$TEST$', 'color', [10, 20, 30] );

			expect( actual ).toBe( '\x1B[38;2;10;20;30m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 10', () => {
			const actual = colorConvertor( '$TEST$', 'bg', [10, 20, 30] );

			expect( actual ).toBe( '\x1B[48;2;10;20;30m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 11', () => {
			const actual = colorConvertor( '$TEST$', 'color', [0, 0, 0] );

			expect( actual ).toBe( '\x1B[38;2;0;0;0m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 12', () => {
			const actual = colorConvertor( '$TEST$', 'bg', [255, 255, 255] );

			expect( actual ).toBe( '\x1B[48;2;255;255;255m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 13', () => {
			const actual = colorConvertor( '$TEST$', 'color', '#000000' );

			expect( actual ).toBe( '\x1B[38;2;0;0;0m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 14', () => {
			const actual = colorConvertor( '$TEST$', 'bg', '#000000' );

			expect( actual ).toBe( '\x1B[48;2;0;0;0m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 15', () => {
			const actual = colorConvertor( '$TEST$', 'color', '#13cedb' );

			expect( actual ).toBe( '\x1B[38;2;19;206;219m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 16', () => {
			const actual = colorConvertor( '$TEST$', 'bg', '#13cedb' );

			expect( actual ).toBe( '\x1B[48;2;19;206;219m' );
		} );

		it( 'should convert color to ansi code correctly - Unit 17', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', 256 );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi code correctly - Unit 18', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', [ 0, 10, 300 ] );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi code correctly - Unit 19', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'color', '#FF00AA00' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi code correctly - Unit 20', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', '#FF00AA00' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi code correctly - Unit 21', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', 'test' );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi code correctly - Unit 22', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', {} as unknown as string );
			} ).toThrow( TypeError );
		} );

		it( 'should convert color to ansi code correctly - Unit 23', () => {
			expect( () => {
				colorConvertor( '$TEST$', 'bg', [] as unknown as [number, number, number] );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing formatmsg function - Test Group', () => {
		it( 'should format the string correctly - Unit 1', () => {
			const message = 'text';
			const params = [];

			const expected = message;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'should format the string correctly - Unit 2', () => {
			const message = 'text';
			const params = [ 'Hello' ];

			const expected = message;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'should format the string correctly - Unit 3', () => {
			const message = '%v';
			const params = [ 'Hello' ];

			const expected = `${ silentecho( params[ 0 ] ) }`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'should format the string correctly - Unit 4', () => {
			const message = '%v-%v';
			const params = [ 'Hello', true ];

			const expected = `${ silentecho( params[ 0 ] ) }-${ silentecho( params[ 1 ] ) }`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'should format the string correctly - Unit 5', () => {
			const message = '%v-%v%v';
			const params = [ 'Hello', true /*, undefined */ ];

			const expected = `${ silentecho( params[ 0 ] ) }-${ silentecho( params[ 1 ] ) }${ silentecho( params[ 2 ] ) }`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'should format the string correctly - Unit 6', () => {
			const message = '%v-%v%v';
			const params = [ 'Hello', true, { id: 10 } ];

			const expected = `${ silentecho( params[ 0 ] ) }-${ silentecho( params[ 1 ] ) }${ silentecho( params[ 2 ] ) }`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'should format the string correctly - Unit 7', () => {
			const message = 'Hello %v.';
			const params = [ 'Arya' ];

			const expected = `Hello ${ silentecho( params[ 0 ] ) }.`;
			const actual = formatmsg( message, params );

			expect( actual ).toBe( expected );
		} );

		it( 'should format the string correctly - Unit 8', () => {
			expect( () => {
				formatmsg( true as unknown as string, [] );
			} ).toThrow( TypeError );
		} );

		it( 'should format the string correctly - Unit 9', () => {
			expect( () => {
				formatmsg( null as unknown as string, [] );
			} ).toThrow( TypeError );
		} );

		it( 'should format the string correctly - Unit 10', () => {
			expect( () => {
				formatmsg( [] as unknown as string, [] );
			} ).toThrow( TypeError );
		} );

		it( 'should format the string correctly - Unit 11', () => {
			expect( () => {
				formatmsg( [ 'Hello' ] as unknown as string, [] );
			} ).toThrow( TypeError );
		} );

		it( 'should format the string correctly - Unit 12', () => {
			expect( () => {
				formatmsg( { id: '10' } as unknown as string, [] );
			} ).toThrow( TypeError );
		} );

		it( 'should format the string correctly - Unit 13', () => {
			expect( () => {
				formatmsg( undefined as unknown as string, [] );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing silentecho function - Test Group', () => {
		it( 'should format the string correctly - Unit 1', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ 'Hello' ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'should format the string correctly - Unit 2', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ true ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'should format the string correctly - Unit 3', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ 'Hello', { id: 10 } ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'should format the string correctly - Unit 4', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [ 'Hello', { id: 10 }, 10 ];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );

		it( 'should format the string correctly - Unit 5', () => {
			const spy = jest.spyOn( console, 'log' );

			const data = [];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );
	} );

	describe( 'Testing typecheck function - Test Group', () => {
		it( 'should throw an error if type is not match - Unit 1', () => {
			expect( () => { typecheck( '$TEST$', 'string', 'text' ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 2', () => {
			expect( () => { typecheck( '$TEST$', 'number', 'text' ) } ).toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 3', () => {
			expect( () => { typecheck( '$TEST$', 'some', 'text' ) } ).toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 4', () => {
			expect( () => { typecheck( '$TEST$', 'number', 10 ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 5', () => {
			expect( () => { typecheck( '$TEST$', 'object', { id: 10 } ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 6', () => {
			expect( () => { typecheck( '$TEST$', [ 'string' ], 'text' ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 7', () => {
			expect( () => { typecheck( '$TEST$', [ 'number', 'string' ], 'text' ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 8', () => {
			expect( () => { typecheck( '$TEST$', [ 'string', 'number' ], 'text' ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 9', () => {
			expect( () => { typecheck( '$TEST$', [ 'number', 'function' ], () => {} ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 10', () => {
			expect( () => { typecheck( '$TEST$', [ 'number', 'string' ], { id: 10 } ) } ).toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 11', () => {
			expect( () => { typecheck( 10 as unknown as string, [ 'number', 'string' ], 50 ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 12', () => {
			expect( () => { typecheck( null as unknown as string, [ 'number', 'string' ], 50 ) } ).not.toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 13', () => {
			expect( () => { typecheck( '$TEST$', null as unknown as string, 50 ) } ).toThrow( TypeError );
		} );

		it( 'should throw an error if type is not match - Unit 14', () => {
			expect( () => { typecheck( '$TEST$', {} as unknown as string, {} ) } ).toThrow( TypeError );
		} );
	} );
} );
