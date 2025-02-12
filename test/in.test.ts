import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import readlineSync from 'readline-sync';
import In from '../src/input';

jest.mock( 'readline-sync' );

let spyQuestion;
let userInput = '';

beforeEach( () => {
	spyQuestion = jest.spyOn( readlineSync, 'question' ).mockImplementationOnce( ( _query: string ) => {
		return userInput;
	} );
} );

function makeConfirmText( message: string ): string {
	return `${ message } (y/n) `;
}

describe( 'Testing input methods - Test Group', () => {
	describe( 'Testing .input method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', () => {
			userInput = '';
			const message = '';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const message = 'Enter your name: ';
			userInput = 'John Doe';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const message = 'Enter something here... ';
			userInput = 'Hello world!';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const message = 'Enter something here... ';
			userInput = '20';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 5', async () => {
			const message = 'Hello';
			userInput = 'Hello';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 6', async () => {
			const message = 'Enter your text: ';
			userInput = '     ';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 7', async () => {
			const message = '...';
			userInput = '!';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 8', async () => {
			const message = 'Enter something here... ';
			userInput = '    Hello world      ';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 9', async () => {
			const message = 'Enter something here... ';
			userInput = 'dsadsad sa fjsa   Hello world     312903 219dadksj dkaj i ';

			const result = In.input( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should throw an error if the message is not a string - Unit 10', () => {
			expect( () => In.input( 123 as any ) ).toThrow( TypeError );
			expect( () => In.input( 1.3 as any ) ).toThrow( TypeError );
			expect( () => In.input( true as any ) ).toThrow( TypeError );
			expect( () => In.input( null as any ) ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing .password method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', () => {
			userInput = '';
			const message = '';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 2', () => {
			const message = 'Enter your name: ';
			userInput = 'John Doe';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 3', () => {
			const message = 'Enter something here... ';
			userInput = 'Hello world!';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 4', () => {
			const message = 'Enter something here... ';
			userInput = '20';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 5', () => {
			const message = 'Hello';
			userInput = 'Hello';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 6', () => {
			const message = 'Enter your text: ';
			userInput = '     ';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 7', () => {
			const message = '...';
			userInput = '!';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 8', () => {
			const message = 'Enter something here... ';
			userInput = '    Hello world      ';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should read data from input correctly - Unit 9', () => {
			const message = 'Enter something here... ';
			userInput = 'dsadsad sa fjsa   Hello world     312903 219dadksj dkaj i ';

			const result = In.password( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
		} );

		it( 'should throw an error if the message is not a string - Unit 10', () => {
			expect( () => In.password( 123 as any ) ).toThrow( TypeError );
			expect( () => In.password( 1.3 as any ) ).toThrow( TypeError );
			expect( () => In.password( true as any ) ).toThrow( TypeError );
			expect( () => In.password( null as any ) ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing .confirm method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', () => {
			const message = 'Are you agree';
			userInput = 'no';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const message = 'Are you agree';
			userInput = 'n';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const message = 'Are you agree';
			userInput = 'yes';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const message = 'Are you agree';
			userInput = 'y';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
		} );

		it( 'should read data from input correctly - Unit 5', async () => {
			const message = 'Are you agree';
			userInput = 'NO';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
		} );

		it( 'should read data from input correctly - Unit 6', async () => {
			const message = 'Are you agree';
			userInput = 'No';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
		} );

		it( 'should read data from input correctly - Unit 7', async () => {
			const message = 'Are you agree';
			userInput = 'YES';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
		} );

		it( 'should read data from input correctly - Unit 8', async () => {
			const message = 'Are you agree';
			userInput = 'Yes';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
		} );

		it( 'should read data from input correctly - Unit 9', async () => {
			const message = 'Are you agree';
			userInput = 'Y';

			const result = In.confirm( message );

			expect( spyQuestion ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
		} );

		it( 'should throw an error if the message is not a string - Unit 10', () => {
			expect( () => In.confirm( 123 as any ) ).toThrow( TypeError );
			expect( () => In.confirm( 1.3 as any ) ).toThrow( TypeError );
			expect( () => In.confirm( true as any ) ).toThrow( TypeError );
			expect( () => In.confirm( null as any ) ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing .readNumber method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', () => {
			const message = 'Enter your age: ';
			userInput = '21';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 2', () => {
			const message = 'Enter your name: ';
			userInput = '0';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 3', () => {
			const message = 'Enter your name: ';
			userInput = '';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 4', () => {
			const message = 'Enter your name: ';
			userInput = 'Hello';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 5', () => {
			const message = 'Enter your name: ';
			userInput = '  +10  ';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 6', () => {
			const message = 'Enter your name: ';
			userInput = '-10';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 7', () => {
			const message = 'Enter your name: ';
			userInput = '+2.5';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 8', () => {
			const message = 'Enter your name: ';
			userInput = '-12.515';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should read data from input correctly - Unit 9', () => {
			const message = 'Enter your name: ';
			userInput = '0x50';

			const result = In.readNumber( message );

			expect( spyQuestion ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
		} );

		it( 'should throw an error if the message is not a string - Unit 10', () => {
			expect( () => In.readNumber( 123 as any ) ).toThrow( TypeError );
			expect( () => In.readNumber( 1.3 as any ) ).toThrow( TypeError );
			expect( () => In.readNumber( true as any ) ).toThrow( TypeError );
			expect( () => In.readNumber( null as any ) ).toThrow( TypeError );
		} );
	} );
} );
