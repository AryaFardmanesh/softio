import { describe, it, expect } from '@jest/globals';
import Attr from '../src/attributes';

describe( 'Testing attributes methods - Test Group', () => {
	describe( 'Testing .title accessor - Test Group', () => {
		it( 'should set & get the process.title correctly - Unit 1', () => {
			expect( Attr.title ).toBe( process.title );
		} );

		it( 'should set & get the process.title correctly - Unit 2', () => {
			const title = 'test';
			Attr.title = title;
			expect( process.title ).toBe( title );
		} );

		it( 'should set & get the process.title correctly - Unit 3', () => {
			const title = 'test';
			Attr.title = title;
			expect( process.title ).toBe( Attr.title );
		} );
	} );

	describe( 'Testing .width & .height getter - Test Group', () => {
		it( 'should get the screen size correctly - Unit 1', () => {
			expect( Attr.width ).toBe( process.stdout.columns );
		} );

		it( 'should get the screen size correctly - Unit 2', () => {
			process.stdout.columns = 200;
			expect( Attr.width ).toBe( 200 );
		} );

		it( 'should get the screen size correctly - Unit 3', () => {
			expect( Attr.height ).toBe( process.stdout.rows );
		} );

		it( 'should get the screen size correctly - Unit 4', () => {
			process.stdout.rows = 200;
			expect( Attr.height ).toBe( 200 );
		} );
	} );
} );
