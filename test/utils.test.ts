import { describe, it, expect } from '@jest/globals';
import convertToString from '../src/utils/convert-to-string';
import formatMsg from '../src/utils/format-msg';
import isES6Class from '../src/utils/is-es6-class';
import parserMsgArr from '../src/utils/parse-msg-arr';
import typeCheck from '../src/utils/type-check';

describe( 'The Utils Group Test', () => {

	describe( 'The Test Group - convert to string function', () => {

		it( 'should convert data to string correctly - Unit 1', () => {
			const message = 'Hello';
			const actual = convertToString( message );
			const expected = message;

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 2', () => {
			const message = true;
			const actual = convertToString( message );
			const expected = 'true';

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 3', () => {
			const message = null;
			const actual = convertToString( message );
			const expected = 'null';

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 4', () => {
			const message = undefined;
			const actual = convertToString( message );
			const expected = 'undefined';

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 5', () => {
			const message = {
				toString: () => '[to-string]'
			};
			const actual = convertToString( message );
			const expected = message.toString();

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 6', () => {
			const message = () => 'test';
			const actual = convertToString( message );
			const expected = '[Function: message]';

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 7', () => {
			const actual = convertToString( () => {} );
			const expected = '[Function: (anonymous)]';

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 8', () => {
			const message = class {};
			const actual = convertToString( message );
			const expected = '[Class: message]';

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 9', () => {
			const message = class Test {};
			const actual = convertToString( message );
			const expected = '[Class: Test]';

			expect( actual ).toBe( expected );
		} );

		it( 'should convert data to string correctly - Unit 10', () => {
			const actual = convertToString( class {} );
			const expected = '[Class: (anonymous)]';

			expect( actual ).toBe( expected );
		} );

	} );


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


	describe( 'The Test Group - is es6 class function', () => {

		it( 'should specifying data is ES6 class or not - Unit 1', () => {
			const data = class {};
			const actual = isES6Class( data );

			expect( actual ).toBe( true );
		} );

		it( 'should specifying data is ES6 class or not - Unit 2', () => {
			const data = function () {};
			const actual = isES6Class( data );

			expect( actual ).toBe( false );
		} );

		it( 'should specifying data is ES6 class or not - Unit 3', () => {
			const data = () => {};
			const actual = isES6Class( data );

			expect( actual ).toBe( false );
		} );

	} );


	describe( 'The Test Group - parse message array function', () => {

		it( 'It should parse and concat message array correctly - Unit 1', () => {
			const message: unknown[] = [ 'Hello', 'World' ];
			const actual = parserMsgArr( message );
			const expected = 'Hello World';

			expect( actual ).toBe( expected );
		} );

		it( 'It should parse and concat message array correctly - Unit 2', () => {
			const message: unknown[] = [ 'Hello', true ];
			const actual = parserMsgArr( message );
			const expected = 'Hello true';

			expect( actual ).toBe( expected );
		} );

		it( 'It should parse and concat message array correctly - Unit 3', () => {
			const message: unknown[] = [ 'Hello', true, function test() {} ];
			const actual = parserMsgArr( message );
			const expected = 'Hello true [Function: test]';

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
