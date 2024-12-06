import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import output from '../src/output';

const stdout = process.stdout;
const stderr = process.stderr;

beforeEach( () => {
	jest.spyOn( stdout, 'write' ).mockImplementationOnce( ( str ) => {
		return str as any;
	} );
	jest.spyOn( stderr, 'write' ).mockImplementationOnce( ( str ) => {
		return str as any;
	} );
} );

describe( 'The Output Group Test', () => {

	describe( 'The Test Group - write method', () => {

		it( 'should print data correctly - Unit 1', () => {
			const message = 'Hello world!';

			output.write( message );
			expect( stdout.write ).toHaveBeenCalledWith( message );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const message = true;

			output.write( message );
			expect( stdout.write ).toHaveBeenCalledWith( `true` );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const message = undefined;

			output.write( message );
			expect( stdout.write ).toHaveBeenCalledWith( `undefined` );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const message = null;

			output.write( message );
			expect( stdout.write ).toHaveBeenCalledWith( `null` );
		} );

		it( 'should print data correctly - Unit 5', () => {
			const message = {
				toString: function (): string {
					return '[Object]';
				}
			};

			output.write( message );
			expect( stdout.write ).toHaveBeenCalledWith( `[Object]` );
		} );

		it( 'should print data correctly - Unit 6', () => {
			const message = [ 'Hello', 'world!' ];

			output.write( ...message );
			expect( stdout.write ).toHaveBeenCalledWith( message.join( ' ' ) );
		} );

		it( 'should print data correctly - Unit 7', () => {
			const message = [ 'Hello', 'world!', '\n' ];

			output.write( ...message );
			expect( stdout.write ).toHaveBeenCalledWith( message.join( ' ' ) );
		} );

	} );


	describe( 'The Test Group - writeln method', () => {

		it( 'should print data correctly - Unit 1', () => {
			const message = 'Hello world!';

			output.writeln( message );
			expect( stdout.write ).toHaveBeenCalledWith( message + '\n' );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const message = false;

			output.writeln( message );
			expect( stdout.write ).toHaveBeenCalledWith( `false\n` );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const message = undefined;

			output.writeln( message );
			expect( stdout.write ).toHaveBeenCalledWith( `undefined\n` );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const message = null;

			output.writeln( message );
			expect( stdout.write ).toHaveBeenCalledWith( `null\n` );
		} );

		it( 'should print data correctly - Unit 5', () => {
			const message = {
				toString: function (): string {
					return '[Object]';
				}
			};

			output.writeln( message );
			expect( stdout.write ).toHaveBeenCalledWith( `[Object]\n` );
		} );

		it( 'should print data correctly - Unit 6', () => {
			const message = [ 'Hello', 'world!' ];

			output.writeln( ...message );
			expect( stdout.write ).toHaveBeenCalledWith( message.join( ' ' ) + '\n' );
		} );

		it( 'should print data correctly - Unit 7', () => {
			const message = [ 'Hello', 'world!', '\n' ];

			output.writeln( ...message );
			expect( stdout.write ).toHaveBeenCalledWith( message.join( ' ' ) + '\n' );
		} );

	} );


	describe( 'The Test Group - printf method', () => {

		it( 'should print data correctly - Unit 1', () => {
			const message = 'Hello world!';

			output.printf( message );
			expect( stdout.write ).toHaveBeenCalledWith( message );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const message = 'Hello %v';
			const argv: unknown[] = [ 'world!' ];

			output.printf( message, ...argv );
			expect( stdout.write ).toHaveBeenCalledWith( 'Hello world!' );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const message = 'Hello %v';
			const argv: unknown[] = [];

			output.printf( message, ...argv );
			expect( stdout.write ).toHaveBeenCalledWith( `Hello undefined` );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const message = '%v Hello %v\n';
			const argv: unknown[] = [ 'argv1', 'argv2' ];

			output.printf( message, ...argv );
			expect( stdout.write ).toHaveBeenCalledWith( `argv1 Hello argv2\n` );
		} );

	} );


	describe( 'The Test Group - error method', () => {

		it( 'should print data correctly - Unit 1', () => {
			const message = 'Hello world!';

			output.error( message );
			expect( stderr.write ).toHaveBeenCalledWith( message );
		} );

		it( 'should print data correctly - Unit 2', () => {
			const message = 'Hello %v';
			const argv: unknown[] = [ 'world!' ];

			output.error( message, ...argv );
			expect( stderr.write ).toHaveBeenCalledWith( 'Hello world!' );
		} );

		it( 'should print data correctly - Unit 3', () => {
			const message = 'Hello %v';
			const argv: unknown[] = [];

			output.error( message, ...argv );
			expect( stderr.write ).toHaveBeenCalledWith( `Hello undefined` );
		} );

		it( 'should print data correctly - Unit 4', () => {
			const message = '%v Hello %v\n';
			const argv: unknown[] = [ 'argv1', 'argv2' ];

			output.error( message, ...argv );
			expect( stderr.write ).toHaveBeenCalledWith( `argv1 Hello argv2\n` );
		} );

	} );

} );
