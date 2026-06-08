import { jest, beforeEach, afterEach, describe, it, expect } from '@jest/globals';
import In from '../src/input';
import { stdin, stdout } from 'node:process';

let writeSpy: unknown;

beforeEach( () => {
	jest.spyOn( stdin, 'setRawMode' ).mockImplementation( () => {} );
	jest.spyOn( stdin, 'resume' ).mockImplementation( () => {} );
	jest.spyOn( stdin, 'pause' ).mockImplementation( () => {} );
	jest.spyOn( stdin, 'setEncoding' ).mockImplementation( () => {} );

	writeSpy = jest.spyOn( stdout, 'write' ).mockImplementation( () => {} );
} );

afterEach(() => {
	jest.restoreAllMocks();
});

function makeConfirmText( message: string ): string {
	return `${ message } (y/n) `;
}

function emitDataToStdin( data: string = '', addNewline: boolean = true ) {
	for ( let i = 0; i < data.length; i++ ) {
		stdin.emit( 'data', data[ i ] );
	}

	if ( addNewline ) {
		stdin.emit( 'data', '\n' );
	}
}

describe( 'Testing input methods - Test Group', () => {
	describe( 'Testing .input method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', async () => {
			const userInput = 'Hello';
			const message = '';
			const promise = In.input( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( userInput );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const userInput = 'Arya';
			const message = 'What is your name: ';
			const promise = In.input( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( userInput );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );
	} );

	describe( 'Testing .password method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', async () => {
			const label = 'Password: ';
			const mask = '*';
			const userInput = 'abc';

			const promise = In.password( label, mask );

			emitDataToStdin( userInput );

			const result = await promise;

			expect( result ).toBe( userInput );
			expect( writeSpy ).toHaveBeenCalledWith( label );
			expect( writeSpy ).toHaveBeenCalledWith( mask );
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const label = 'Enter your password: ';
			const mask = '*';
			const userInput = 'Hello world!';

			const promise = In.password( label, mask );

			emitDataToStdin( userInput );

			const result = await promise;

			expect( result ).toBe( userInput );
			expect( writeSpy ).toHaveBeenCalledWith( label );
			expect( writeSpy ).toHaveBeenCalledWith( mask );
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const label = 'Enter your password: ';
			const mask = '*';
			const userInput = 'AB\u007f';

			const promise = In.password( label, mask );

			emitDataToStdin( userInput );

			const result = await promise;

			expect( result ).toBe( 'A' );
			expect( writeSpy ).toHaveBeenCalledWith( label );
			expect( writeSpy ).toHaveBeenCalledWith( mask );
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const label = 'Enter your password: ';
			const mask = '*';
			const userInput = 'AB\u007f\u007f';

			const promise = In.password( label, mask );

			emitDataToStdin( userInput );

			const result = await promise;

			expect( result ).toBe( '' );
			expect( writeSpy ).toHaveBeenCalledWith( label );
			expect( writeSpy ).toHaveBeenCalledWith( mask );
		} );
	} );

	describe( 'Testing .confirm method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', async () => {
			const userInput = 'Yes';
			const message = 'Do you want to delete this items ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( true );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const userInput = 'YES';
			const message = 'Do you want to delete this item ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( true );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const userInput = 'yes';
			const message = 'Do you want to delete this item ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( true );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const userInput = 'yeS';
			const message = 'Do you want to delete this item ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( true );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );

		it( 'should read data from input correctly - Unit 5', async () => {
			const userInput = 'No';
			const message = 'Do you want to delete this item ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( false );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );

		it( 'should read data from input correctly - Unit 6', async () => {
			const userInput = 'NO';
			const message = 'Do you want to delete this item ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( false );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );

		it( 'should read data from input correctly - Unit 7', async () => {
			const userInput = 'no';
			const message = 'Do you want to delete this item ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( false );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );

		it( 'should read data from input correctly - Unit 8', async () => {
			const userInput = 'nO';
			const message = 'Do you want to delete this item ?';
			const promise = In.confirm( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( false );
			expect( writeSpy ).toHaveBeenCalledWith( makeConfirmText( message ) );
		} );
	} );

	describe( 'Testing .readNumber method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', async () => {
			const userInput = '21';
			const message = 'Enter your age: ';
			const promise = In.readNumber( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( Number( userInput ) );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const userInput = '12315';
			const message = 'Enter your number: ';
			const promise = In.readNumber( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( Number( userInput ) );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const userInput = '0x15';
			const message = 'Enter your number: ';
			const promise = In.readNumber( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( Number( userInput ) );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const userInput = '0b101010';
			const message = 'Enter your number: ';
			const promise = In.readNumber( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( Number( userInput ) );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );

		it( 'should read data from input correctly - Unit 5', async () => {
			const userInput = '0o147156';
			const message = 'Enter your number: ';
			const promise = In.readNumber( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( Number( userInput ) );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );

		it( 'should read data from input correctly - Unit 6', async () => {
			const userInput = 'no-numberic';
			const message = 'Enter your number: ';
			const promise = In.readNumber( message );

			emitDataToStdin( userInput );

			const result = await promise;
			expect( result ).toBe( Number( userInput ) );
			expect( writeSpy ).toHaveBeenCalledWith( message );
		} );
	} );
} );
