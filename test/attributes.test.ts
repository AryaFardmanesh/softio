import { describe, it, expect } from '@jest/globals';
import attributes from '../src/attributes';

describe( 'The Attributes Group Test', () => {

	describe( 'The Test Group - title accessor', () => {

		it( 'should get the title of console - Unit 1', () => {
			const actual = attributes.title;
			const expected = process.title;

			expect( actual ).toBe( expected );
		} );

		it( 'should set the title of console - Unit 2', () => {
			const title = 'test softio';
			attributes.title = title;

			expect( process.title ).toBe( title );
			expect( attributes.title ).toBe( title );
		} );

		it( 'Should throw an error if the title is not a string - Unit 3', () => {
			expect( () => { attributes.title = 123 as any } ).toThrow( TypeError );
			expect( () => { attributes.title = 1.3 as any } ).toThrow( TypeError );
			expect( () => { attributes.title = true as any } ).toThrow( TypeError );
			expect( () => { attributes.title = null as any } ).toThrow( TypeError );
			expect( () => { attributes.title = undefined as any } ).toThrow( TypeError );
		} );

	} );


	describe( 'The Test Group - width accessor', () => {

		it( 'should get the width of console - Unit 1', () => {
			const actual = attributes.width;
			const expected = process.stdout.columns;

			expect( actual ).toBe( expected );
		} );

	} );


	describe( 'The Test Group - height accessor', () => {

		it( 'should get the height of console - Unit 1', () => {
			const actual = attributes.height;
			const expected = process.stdout.rows;

			expect( actual ).toBe( expected );
		} );

	} );

} );
