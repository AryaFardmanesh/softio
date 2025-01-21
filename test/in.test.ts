import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import readline from 'node:readline/promises';
import In from '../src/input';

jest.mock( 'node:readline/promises' );

const questionMock = jest.fn();
const closeMock = jest.fn();

beforeEach( () => {
	questionMock.mockClear();
	closeMock.mockClear();

	( readline.createInterface as jest.Mock ).mockReturnValue( {
		question: questionMock,
		close: closeMock,
	} );
} );

function makeConfirmText( message: string ): string {
	return `${ message } (y/n) `;
}

describe( 'Testing input methods - Test Group', () => {
	describe( 'Testing .input method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', async () => {
			const message = '';
			const userInput = '';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const message = 'Enter your name: ';
			const userInput = 'John Doe';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const message = 'Enter something here... ';
			const userInput = 'Hello world!';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const message = 'Enter something here... ';
			const userInput = '20';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 5', async () => {
			const message = 'Hello';
			const userInput = 'Hello';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 6', async () => {
			const message = 'Enter your text: ';
			const userInput = '     ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 7', async () => {
			const message = '...';
			const userInput = '!';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 8', async () => {
			const message = 'Enter something here... ';
			const userInput = '    Hello world      ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 9', async () => {
			const message = 'Enter something here... ';
			const userInput = 'dsadsad sa fjsa   Hello world     312903 219dadksj dkaj i ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should throw an error if the message is not a string - Unit 10', async () => {
			await expect( In.input( 123 as any ) ).rejects.toThrow( TypeError );
			await expect( In.input( 1.3 as any ) ).rejects.toThrow( TypeError );
			await expect( In.input( true as any ) ).rejects.toThrow( TypeError );
			await expect( In.input( null as any ) ).rejects.toThrow( TypeError );
		} );
	} );

	describe( 'Testing .confirm method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', async () => {
			const message = 'Are you agree';
			const userInput = 'no';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const message = 'Are you agree';
			const userInput = 'n';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const message = 'Are you agree';
			const userInput = 'yes';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const message = 'Are you agree';
			const userInput = 'y';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 5', async () => {
			const message = 'Are you agree';
			const userInput = 'NO';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 6', async () => {
			const message = 'Are you agree';
			const userInput = 'No';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 7', async () => {
			const message = 'Are you agree';
			const userInput = 'YES';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 8', async () => {
			const message = 'Are you agree';
			const userInput = 'Yes';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 9', async () => {
			const message = 'Are you agree';
			const userInput = 'Y';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( makeConfirmText( message ) );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should throw an error if the message is not a string - Unit 10', async () => {
			await expect( In.confirm( 123 as any ) ).rejects.toThrow( TypeError );
			await expect( In.confirm( 1.3 as any ) ).rejects.toThrow( TypeError );
			await expect( In.confirm( true as any ) ).rejects.toThrow( TypeError );
			await expect( In.confirm( null as any ) ).rejects.toThrow( TypeError );
		} );
	} );

	describe( 'Testing .readNumber method - Test Group', () => {
		it( 'should read data from input correctly - Unit 1', async () => {
			const message = 'Enter your age: ';
			const userInput = '21';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 2', async () => {
			const message = 'Enter your name: ';
			const userInput = '0';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 3', async () => {
			const message = 'Enter your name: ';
			const userInput = '';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 4', async () => {
			const message = 'Enter your name: ';
			const userInput = 'Hello';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 5', async () => {
			const message = 'Enter your name: ';
			const userInput = '  +10  ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 6', async () => {
			const message = 'Enter your name: ';
			const userInput = '-10';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 7', async () => {
			const message = 'Enter your name: ';
			const userInput = '+2.5';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 8', async () => {
			const message = 'Enter your name: ';
			const userInput = '-12.515';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data from input correctly - Unit 9', async () => {
			const message = 'Enter your name: ';
			const userInput = '0x50';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await In.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should throw an error if the message is not a string - Unit 10', async () => {
			await expect( In.readNumber( 123 as any ) ).rejects.toThrow( TypeError );
			await expect( In.readNumber( 1.3 as any ) ).rejects.toThrow( TypeError );
			await expect( In.readNumber( true as any ) ).rejects.toThrow( TypeError );
			await expect( In.readNumber( null as any ) ).rejects.toThrow( TypeError );
		} );
	} );
} );
