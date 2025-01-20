import { jest, describe, it, expect } from '@jest/globals';
import silentecho from '../src/utils/silentecho';
import Out from '../src/output';

describe( 'Testing output methods - Test Group', () => {
	describe( 'Testing .write method - Test Group', () => {
		it( 'should print data correctly - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = 'Hello world!';
			Out.write( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = true;
			Out.write( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = undefined;
			Out.write( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = 10;
			Out.write( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 5', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = { kind: 'car', info: { price: 1000, unit: 'USD' } };
			Out.write( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 6', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ 'hello', true, 10 ];
			Out.write( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 7', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ 'hello', true, 10 ];
			Out.write( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) );
		} );

		it( 'should print data correctly - Unit 8', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ 'hello', true, 10, { kind: 'car', info: { price: 1000, unit: 'USD' } } ];
			Out.write( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) );
		} );

		it( 'should print data correctly - Unit 9', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ { kind: 'car', info: { price: 1000, unit: 'USD' } } ];
			Out.write( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) );
		} );

		it( 'should print data correctly - Unit 10', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [
				{ kind: 'car', info: { price: 1000, unit: 'USD' } },
				{ kind: 'car', info: { price: 1000, unit: 'USD' } }
			];
			Out.write( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) );
		} );
	} );

	describe( 'Testing .writeln method - Test Group', () => {
		it( 'should print data correctly - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = 'Hello world!';
			Out.writeln( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = true;
			Out.writeln( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = undefined;
			Out.writeln( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = 10;
			Out.writeln( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 5', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = { kind: 'car', info: { price: 1000, unit: 'USD' } };
			Out.writeln( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 6', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ 'hello', true, 10 ];
			Out.writeln( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 7', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ 'hello', true, 10 ];
			Out.writeln( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 8', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ 'hello', true, 10, { kind: 'car', info: { price: 1000, unit: 'USD' } } ];
			Out.writeln( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 9', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [ { kind: 'car', info: { price: 1000, unit: 'USD' } } ];
			Out.writeln( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) + '\n' );
		} );

		it( 'should print data correctly - Unit 10', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = [
				{ kind: 'car', info: { price: 1000, unit: 'USD' } },
				{ kind: 'car', info: { price: 1000, unit: 'USD' } }
			];
			Out.writeln( ...expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( ...expected ) + '\n' );
		} );
	} );

	describe( 'Testing .printf method - Test Group', () => {
		it( 'should print data correctly - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const expected = 'Hello world!';
			Out.printf( expected );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const msg = 'Hello %v!';
			const params = [ 'world' ];
			const expected = `Hello ${ params[ 0 ] }!`;
			Out.printf( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const msg = '%v';
			const params = [ true ];
			const expected = `${ params[ 0 ] }`;
			Out.printf( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const msg = '%v%v%v%v';
			const params = [ true, 'Hello', 10, { kind: 'car', info: { price: 1000, unit: 'USD' } } ];
			const expected = `${ silentecho( params[ 0 ] ) }${ silentecho( params[ 1 ] ) }${ silentecho( params[ 2 ] ) }${ silentecho( params[ 3 ] ) }`;
			Out.printf( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( expected );
		} );

		it( 'should print data correctly - Unit 5', () => {
			const spy = jest.spyOn( process.stdout, 'write' );

			const msg = '%v';
			const params = [];
			const expected = `${ silentecho( params[ 0 ] ) }`;
			Out.printf( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( expected );
		} );
	} );

	describe( 'Testing .error method - Test Group', () => {
		it( 'should print data correctly - Unit 1', () => {
			const spy = jest.spyOn( process.stderr, 'write' );

			const expected = 'Hello world!';
			Out.error( expected );

			expect( spy ).toHaveBeenCalledWith( expected );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const spy = jest.spyOn( process.stderr, 'write' );

			const msg = 'Hello %v!';
			const params = [ 'world' ];
			const expected = `Hello ${ silentecho( params[ 0 ] ) }!`;
			Out.error( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( expected );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const spy = jest.spyOn( process.stderr, 'write' );

			const msg = '%v';
			const params = [ true ];
			const expected = `${ params[ 0 ] }`;
			Out.error( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( silentecho( expected ) );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const spy = jest.spyOn( process.stderr, 'write' );

			const msg = '%v%v%v%v';
			const params = [ true, 'Hello', 10, { kind: 'car', info: { price: 1000, unit: 'USD' } } ];
			const expected = `${ silentecho( params[ 0 ] ) }${ silentecho( params[ 1 ] ) }${ silentecho( params[ 2 ] ) }${ silentecho( params[ 3 ] ) }`;
			Out.error( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( expected );
		} );

		it( 'should print data correctly - Unit 5', () => {
			const spy = jest.spyOn( process.stderr, 'write' );

			const msg = '%v';
			const params = [];
			const expected = `${ silentecho( params[ 0 ] ) }`;
			Out.error( msg, ...params );

			expect( spy ).toHaveBeenCalledWith( expected );
		} );
	} );
} );
