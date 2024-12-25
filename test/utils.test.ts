import { describe, it, expect } from '@jest/globals';
import formatMsg from '../src/utils/format-msg';
import typeCheck from '../src/utils/type-check';

describe( 'The Utils Group Test', () => {


	describe( 'The Test Group - format message function', () => {

		it( 'should replace data into the message string correctly - Unit 1', () => {
			const message = 'Hello %v.';
			const argv = [ 'test' ];
			const actual = formatMsg( message, ...argv );
			const expected = 'Hello test.';

			expect( actual ).toBe( expected );
		} );

		it( 'should replace data into the message string correctly - Unit 2', () => {
			const message = 'Hello.';
			const argv = [ 'test' ];
			const actual = formatMsg( message, ...argv );
			const expected = 'Hello.';

			expect( actual ).toBe( expected );
		} );

		it( 'should replace data into the message string correctly - Unit 3', () => {
			const message = 'Hello %v.';
			const argv: unknown[] = [];
			const actual = formatMsg( message, ...argv );
			const expected = 'Hello undefined.';

			expect( actual ).toBe( expected );
		} );

		it( 'should replace data into the message string correctly - Unit 4', () => {
			const message = '%v';
			const argv: unknown[] = [ true ];
			const actual = formatMsg( message, ...argv );
			const expected = 'true';

			expect( actual ).toBe( expected );
		} );

		it( 'should replace data into the message string correctly - Unit 5', () => {
			const message = 'Data: -%v-';
			const argv: unknown[] = [ () => {} ];
			const actual = formatMsg( message, ...argv );
			const expected = 'Data: -[Function: (anonymous)]-';

			expect( actual ).toBe( expected );
		} );

		it( 'should replace data into the message string correctly - Unit 6', () => {
			const message = '%x % % v';
			const argv: unknown[] = [];
			const actual = formatMsg( message, ...argv );
			const expected = '%x % % v';

			expect( actual ).toBe( expected );
		} );

	} );


	describe( 'The Test Group - type check function', () => {

		it( 'should throw type error if input type was not match - Unit 1', () => {
			expect( () => {

				const data = true;
				typeCheck( 'test', 'boolean', data );

			} ).not.toThrow();
		} );

		it( 'should throw type error if input type was not match - Unit 2', () => {
			expect( () => {

				const data = true;
				typeCheck( 'test', 'string', data );

			} ).toThrow( TypeError );
		} );

		it( 'should throw type error if input type was not match - Unit 3', () => {
			expect( () => {

				const data = String;
				typeCheck( 'test', 'string', data );

			} ).toThrow( TypeError );
		} );

	} );

} );
