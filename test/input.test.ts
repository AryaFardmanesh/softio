import { jest, beforeEach, describe, it, expect } from '@jest/globals';
import readline from 'node:readline/promises';
import input from '../src/input';

jest.mock( 'node:readline/promises' );

describe( 'The Input Group Test', () => {

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


	describe( 'The Test Group - input method', () => {

		it( 'should read data correctly from stdin - Unit 1', async () => {
			const message = 'Enter your name: ';
			const userInput = 'John Doe';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.input( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'should read data correctly from stdin - Unit 2', async () => {
			const userInput = 'John Doe';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.input();

			expect( questionMock ).toHaveBeenCalledWith( "" );
			expect( result ).toBe( userInput );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should throw an error if the message is not a string - Unit 3', async () => {
			await expect( input.input( 123 as any ) ).rejects.toThrow( TypeError );
			await expect( input.input( 1.3 as any ) ).rejects.toThrow( TypeError );
			await expect( input.input( true as any ) ).rejects.toThrow( TypeError );
			await expect( input.input( null as any ) ).rejects.toThrow( TypeError );
		} );

	} );


	describe( 'The Test Group - confirm method', () => {

		it( 'Should get confirm from user correctly - Unit 1', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'y';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 2', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'Y';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 3', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'yes';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 4', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'Yes';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 5', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'YES';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 6', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'ok';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 7', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'Ok';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 8', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'OK';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( true );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 9', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'n';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 10', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'no';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 11', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = 'No';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should get confirm from user correctly - Unit 12', async () => {
			const message = 'Do you want to remove data ?';
			const userInput = '';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.confirm( message );

			expect( questionMock ).toHaveBeenCalledWith( message + ' (y/n) ' );
			expect( result ).toBe( false );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should throw an error if the message is not a string - Unit 13', async () => {
			await expect( input.confirm( 123 as any ) ).rejects.toThrow( TypeError );
			await expect( input.confirm( 1.3 as any ) ).rejects.toThrow( TypeError );
			await expect( input.confirm( true as any ) ).rejects.toThrow( TypeError );
			await expect( input.confirm( null as any ) ).rejects.toThrow( TypeError );
		} );

	} );


	describe( 'The Test Group - readNumber method', () => {

		it( 'It should read number from stdin correctly - Unit 1', async () => {
			const message = 'Enter any number: ';
			const userInput = '18';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 2', async () => {
			const message = 'Enter any number: ';
			const userInput = '+18';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 3', async () => {
			const message = 'Enter any number: ';
			const userInput = '-1132128';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 4', async () => {
			const message = 'Enter any number: ';
			const userInput = '2.5';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 5', async () => {
			const message = 'Enter any number: ';
			const userInput = '+12.455';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 6', async () => {
			const message = 'Enter any number: ';
			const userInput = '-12.455';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 7', async () => {
			const message = 'Enter any number: ';
			const userInput = '-12.45.55';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 8', async () => {
			const message = 'Enter any number: ';
			const userInput = '';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 9', async () => {
			const message = 'Enter any number: ';
			const userInput = '   3   ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 10', async () => {
			const message = 'Enter any number: ';
			const userInput = '   3   ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 11', async () => {
			const message = 'Enter any number: ';
			const userInput = '   +1513   ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'It should read number from stdin correctly - Unit 12', async () => {
			const message = 'Enter any number: ';
			const userInput = '   -15.13   ';

			// Mock the question method to simulate user input
			questionMock.mockResolvedValue( userInput as never );

			const result = await input.readNumber( message );

			expect( questionMock ).toHaveBeenCalledWith( message );
			expect( result ).toBe( Number( userInput ) );
			expect( closeMock ).toHaveBeenCalled();
		} );

		it( 'Should throw an error if the message is not a string - Unit 13', async () => {
			await expect( input.readNumber( 123 as any ) ).rejects.toThrow( TypeError );
			await expect( input.readNumber( 1.3 as any ) ).rejects.toThrow( TypeError );
			await expect( input.readNumber( true as any ) ).rejects.toThrow( TypeError );
			await expect( input.readNumber( null as any ) ).rejects.toThrow( TypeError );
		} );

	} );

} );
