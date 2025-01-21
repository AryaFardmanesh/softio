import { jest, beforeEach, describe, it, expect } from '@jest/globals';
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
