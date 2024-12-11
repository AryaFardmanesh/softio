import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import helper from '../src/helper';

const stdout = process.stdout;

beforeEach( () => {
	jest.spyOn( stdout, 'write' ).mockImplementationOnce( ( str ) => {
		return str as any;
	} );
} );

describe( 'The Helper Group Test', () => {

	describe( 'The Test Group - clear method', () => {

		it( 'should print clear ansi code correctly - Unit 1', () => {
			helper.clear();
			expect( stdout.write ).toHaveBeenCalledWith( '\x1b[2J' );
		} );

	} );


	describe( 'The Test Group - center method', () => {

		it( 'It should central input text correctly - Unit 1', () => {
			stdout.columns = 12;
			const message = 'hello';
			const expected = `   ${ message }`;

			const actual = helper.center( message );

			expect( actual ).toBe( expected );
		} );

		it( 'It should central input text correctly - Unit 2', () => {
			stdout.columns = 10;
			const message = 'ab';
			const expected = `    ${ message }`;

			const actual = helper.center( message );

			expect( actual ).toBe( expected );
		} );

		it( 'It should central input text correctly - Unit 3', () => {
			stdout.columns = 10;
			const message = 'abcd';
			const expected = `   ${ message }`;

			const actual = helper.center( message );

			expect( actual ).toBe( expected );
		} );

		it( 'Should throw an error if the message is not a string - Unit 4', () => {
			expect( () => { helper.center( 123 as any ) } ).toThrow( TypeError );
			expect( () => { helper.center( 1.3 as any ) } ).toThrow( TypeError );
			expect( () => { helper.center( true as any ) } ).toThrow( TypeError );
			expect( () => { helper.center( null as any ) } ).toThrow( TypeError );
		} );

	} );

} );
