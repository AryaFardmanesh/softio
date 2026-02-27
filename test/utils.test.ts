import { jest, beforeEach, describe, it, expect } from '@jest/globals';
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
	describe( 'Testing formatmsg function - Test Group', () => {
		it( 'should format the string correctly - Unit 1', () => {
			const message = 'text';
			const params: unknown[] = [];

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

			const data: unknown[] = [];
			silentecho( ...data );

			expect( spy ).toHaveBeenCalledWith( ...data );
		} );
	} );
} );
