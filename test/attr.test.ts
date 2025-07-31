import { jest, describe, it, expect } from '@jest/globals';
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

	describe( 'Testing .reset method - Test Group', () => {
		it( 'should reset the graphics - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.reset();
			expect( spy ).toHaveBeenCalledWith( '\x1b[0m' );
		} );
	} );

	describe( 'Testing .color method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( 'black' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[30m' );
		} );

		it( 'should chage the text color - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( 18 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;5;18m' );
		} );

		it( 'should chage the text color - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( [ 20, 30, 40 ] );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;20;30;40m' );
		} );

		it( 'should chage the text color - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.color( '#FFFFFF' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .colorRGB method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.colorRGB( 10, 20, 30 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;10;20;30m' );
		} );
	} );

	describe( 'Testing .colorHex method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.colorHex( '#ffffff' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[38;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .background method - Test Group', () => {
		it( 'should chage the background - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( 'black' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[40m' );
		} );

		it( 'should chage the background - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( 18 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;5;18m' );
		} );

		it( 'should chage the background - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( [ 20, 30, 40 ] );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;20;30;40m' );
		} );

		it( 'should chage the background - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.background( '#FFFFFF' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .backgroundRGB method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.backgroundRGB( 10, 20, 30 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;10;20;30m' );
		} );
	} );

	describe( 'Testing .backgroundHex method - Test Group', () => {
		it( 'should chage the text color - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.backgroundHex( '#ffffff' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[48;2;255;255;255m' );
		} );
	} );

	describe( 'Testing .style method - Test Group', () => {
		it( 'should chage the text style - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.style( 'bold' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1m' );
		} );
	} );

	describe( 'Testing .move method - Test Group', () => {
		it( 'should chage the cursor position - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.move( 10, 10 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[10;10f' );
		} );
	} );

	describe( 'Testing .moveCol method - Test Group', () => {
		it( 'should chage the cursor position - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.moveCol( 10 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[10;G' );
		} );
	} );

	describe( 'Testing .moveHome method - Test Group', () => {
		it( 'should chage the cursor position - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.moveHome();
			expect( spy ).toHaveBeenCalledWith( '\x1b[H' );
		} );
	} );

	describe( 'Testing .cursorWalk method - Test Group', () => {
		it( 'should chage the cursor position - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'up', 1 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1;A' );
		} );

		it( 'should chage the cursor position - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'down', 1 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1;B' );
		} );

		it( 'should chage the cursor position - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'right', 1 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1;C' );
		} );

		it( 'should chage the cursor position - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'left', 1 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1;D' );
		} );

		it( 'should chage the cursor position - Unit 5', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'next', 1 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1;E' );
		} );

		it( 'should chage the cursor position - Unit 6', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'previous', 1 );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1;F' );
		} );

		it( 'should chage the cursor position - Unit 7', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'go-up' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[M' );
		} );

		it( 'should chage the cursor position - Unit 8', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorWalk( 'home' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[H' );
		} );

		it( 'should throw an error when the input is incorrect - Unit 9', () => {
			expect( () => {
				Attr.cursorWalk( 'test' as unknown as 'up' );
				Attr.cursorWalk( 'Home' as unknown as 'up' );
				Attr.cursorWalk( '' as unknown as 'up' );
				Attr.cursorWalk( 1 as unknown as 'up' );
				Attr.cursorWalk( true as unknown as 'up' );
				Attr.cursorWalk( 'home', true as unknown as number );
				Attr.cursorWalk( 'home', '1' as unknown as number );
			} ).toThrow( TypeError );
		} );
	} );

	describe( 'Testing .cursorSave method - Test Group', () => {
		it( 'should save the cursor position - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorSave( 'DEC' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[7' );
		} );

		it( 'should save the cursor position - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorSave( 'SCO' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[s' );
		} );
	} );

	describe( 'Testing .cursorRestore method - Test Group', () => {
		it( 'should restore the cursor position - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorRestore( 'DEC' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[8' );
		} );

		it( 'should restore the cursor position - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorRestore( 'SCO' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[u' );
		} );
	} );

	describe( 'Testing .cursorStyle method - Test Group', () => {
		it( 'should change the cursor style - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorStyle( 'invisible' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[?25l' );
		} );

		it( 'should change the cursor style - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.cursorStyle( 'visible' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[?25h' );
		} );
	} );

	describe( 'Testing .erase method - Test Group', () => {
		it( 'should erase the screen - Unit 1', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'in-display' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[J' );
		} );

		it( 'should erase the screen - Unit 2', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'cursor-until-end' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[0J' );
		} );

		it( 'should erase the screen - Unit 3', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'cursor-to-beginning' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1J' );
		} );

		it( 'should erase the screen - Unit 4', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'entire' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[2J' );
		} );

		it( 'should erase the screen - Unit 5', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'saved-lines' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[3J' );
		} );

		it( 'should erase the screen - Unit 6', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'in-line' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[K' );
		} );

		it( 'should erase the screen - Unit 7', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'cursor-until-end-line' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[0K' );
		} );

		it( 'should erase the screen - Unit 8', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'start-line-until-cursor' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[1K' );
		} );

		it( 'should erase the screen - Unit 9', () => {
			const spy = jest.spyOn( process.stdout, 'write' );
			Attr.erase( 'entire-line' );
			expect( spy ).toHaveBeenCalledWith( '\x1b[2K' );
		} );

		it( 'should throw an error when the input is incorrect - Unit 10', () => {
			expect( () => {
				Attr.erase( 'test' as unknown as 'entire' );
				Attr.erase( 'Home' as unknown as 'entire' );
				Attr.erase( '' as unknown as 'entire' );
				Attr.erase( 1 as unknown as 'entire' );
				Attr.erase( true as unknown as 'entire' );
			} ).toThrow( TypeError );
		} );
	} );
} );
