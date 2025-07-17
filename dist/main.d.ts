/*! Softio v3.30.11 Copyright (c) 2025 Arya Fardmanesh and contributors */

/*************************************************
 * @file SoftIO Type File
 * @author SoftIO Contributors
 * @url https://github.com/AryaFardmanesh/softio
 * @license MIT
*************************************************/

// ==================== Types ====================
export declare type ANSI_Color_T =
	'black'			|
	'red'			|
	'green'			|
	'yellow'		|
	'blue'			|
	'magenta'		|
	'cyan'			|
	'white'			|
	'bright-black'		|
	'bright-red'		|
	'bright-green'		|
	'bright-yellow'		|
	'bright-blue'		|
	'bright-magenta'	|
	'bright-cyan'		|
	'bright-white'		|
	'default'
;

export declare type ANSI_Background_T = ANSI_Color_T;

export type ColorParam_T = ANSI_Color_T | (string & {} ) | number | [ number, number, number ];

export type BgColorParam_T = ANSI_Background_T | (string & {} ) | number | [ number, number, number ];

export declare type ANSI_Style_T =
	'bold'		|
	'dim'		|
	'italic'	|
	'underline'	|
	'blinking'	|
	'reverse'	|
	'hidden'	|
	'strikethrough' |
	'default'
;

export declare type ANSI_Cursor_Movement_T =
	'up'		|
	'down'		|
	'right'		|
	'left'		|
	'next'		|
	'previous'	|
	'go-up'
;

export declare type ANSI_Cursor_Style_T =
	'invisible'	|
	'visible'
;

export declare type ANSI_Erase_T =
	'in-display'			|
	'cursor-until-end'		|
	'cursor-to-beginning'		|
	'entire'			|
	'saved-lines'			|
	'in-line'			|
	'cursor-until-end-line'		|
	'start-line-until-cursor'	|
	'entire-line'
;

type ShotStyleT = {
	color?: ANSI_Color_T | number | [number, number, number] | string,
	background?: ANSI_Background_T | number | [number, number, number] | string,
	style?: ANSI_Style_T,
};

export declare type EventTypesT =
	'resize'
;
// ==================== Types ====================

/**
 * @description Installed package version.
**/
export declare const version: string;

/**
 * @description This class is for output methods.
**/
export declare class Out {
	/**
	 * @description Used to print data to the console.
	**/
	public static write( ...message: unknown[] ): void;

	/**
	 * @description Used to print data to the console.
	 * It also creates a newline at the end of the message.
	**/
	public static writeln( ...message: unknown[] ): void;

	/**
	 * @description It is used to display and print data
	 * in C style.
	**/
	public static printf( message: string, ...argv: unknown[] ): void;

	/**
	 * @description It is used to print error messages on
	 * the console. It works similarly to the "printf" method.
	**/
	public static error( message: string, ...argv: unknown[] ): void;

	/**
	 * @description This method is used to create a customized
	 * output function.
	**/
	public static shot<T extends Function>( func: T, style: ShotStyleT ): T;
}

/**
 * @description This class is for input methods.
**/
export declare class In {
	/**
	 * @description This method is used to get data from
	 * the input.
	**/
	public static input( message?: string ): string;

	/**
	 * @description This method is for capturing passwords
	 * or important data.
	**/
	public static password( message: string, char: string ): string

	/**
	 * @description Used to obtain user consent.
	**/
	public static confirm( message?: string ): boolean;

	/**
	 * @description It is used to get a number from the
	 * input.
	**/
	public static readNumber( message?: string ): number;
}

/**
 * @description This class is for attributes methods.
**/
export declare class Attr {
	/**
	 * @description This property returns the title of
	 * the console page.
	**/
	public static get title(): string;

	/**
	 * @description This property sets the console page
	 * title.
	**/
	public static set title( value: string );

	/**
	 * @description Returns the width of the console
	 * screen. (The number of characters that fit in the
	 * width)
	**/
	public static get width(): number;

	/**
	 * @description Returns the height of the console
	 * screen. (Number of characters proportional to the
	 * height)
	**/
	public static get height(): number;

	/**
	 * @description It's to reset the console graphical
	 * features.
	**/
	public static reset(): void;

	/**
	 * @description To set the text color.
	**/
	public static color( color: ColorParam_T ): void;

	/**
	 * @deprecated
	 * @description To set the text color as RGB.
	**/
	public static colorRGB( red: string | number, green: string | number, blue: string | number ): void;

	/**
	 * @deprecated
	 * @description To set the text color as hex.
	**/
	public static colorHex( hex: string ): void;

	/**
	 * @description To set the background color.
	**/
	public static background( color: BgColorParam_T ): void;

	/**
	 * @deprecated
	 * @description To set the background color as RGB.
	**/
	public static backgroundRGB( red: string | number, green: string | number, blue: string | number ): void;

	/**
	 * @deprecated
	 * @description To set the background hex.
	**/
	public static backgroundHex( hex: string ): void;

	/**
	 * @description To set the text style.
	**/
	public static style( style: ANSI_Style_T ): void;

	/**
	 * @description This method used for moving the cursor
	 * position in console.
	**/
	public static move( x: number | string, y: number | string ): void;

	/**
	 * @description This method used for moving the cursor
	 * column in console.
	**/
	public static moveCol( x: number | string ): void;

	/**
	 * @description This method move the cursor position in
	 * (x=0, y=0) in console.
	**/
	public static moveHome(): void;

	/**
	 * @description This method is used to move the cursor
	 * in different directions.
	**/
	public static cursorWalk( arrow: ANSI_Cursor_Movement_T, value?: number | string ): void;

	/**
	 * @description This method save the cursor position.
	**/
	public static cursorSave( mode?: 'DEC' | 'SCO' ): void;

	/**
	 * @description This method restore the cursor position.
	**/
	public static cursorRestore( mode?: 'DEC' | 'SCO' ): void;

	/**
	 * @description This method used for change cursor icon.
	**/
	public static cursorStyle( style: ANSI_Cursor_Style_T ): void;

	/**
	 * @description This method used for clear the console.
	**/
	public static erase( mode: ANSI_Erase_T ): void;
}

/**
 * @description This class is for event-related methods.
**/
export declare class Events {
	/**
	 * @description Sets a new event.
	**/
	public static addEventListener( type: EventTypesT, listener: Function ): void;

	/**
	 * @description Deletes the previously set event.
	**/
	public static removeEventListener( type: EventTypesT ): void;
}

/**
 * @description This class is for utils methods.
**/
export declare class Utils {
	/**
	 * @description It centeralize the message in the middle
	 * of the console screen and returns it.
	**/
	public static center( message: string ): string;

	/**
	 * @description Clears the console screen.
	**/
	public static clear(): void;

	/**
	 * @description Used to restore graphics modes to default.
	**/
	public static reset(): string;

	/**
	 * @description Used to change the color of the console text.
	**/
	public static color( color: ANSI_Color_T | number | [number, number, number] | string ): string;

	/**
	 * @description Used to change the background color of console
	 * texts.
	**/
	public static background( color: ANSI_Background_T | number | [number, number, number] | string ): string;

	/**
	 * @description It is used to change the style of texts.
	**/
	public static fontStyle( style: ANSI_Style_T ): string;
}
