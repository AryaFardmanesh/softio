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
	'strikethrough'
;

export declare type ANSI_Cursor_Movement_T =
	'up'		|
	'down'		|
	'right'		|
	'left'		|
	'next'		|
	'previous'	|
	'go-up'		|
	'home'
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
	color?: ColorParam_T,
	background?: BgColorParam_T,
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
	public static shot<T extends Function>( func: T, style?: ShotStyleT ): T;
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
	public static password( message?: string, char?: string ): string

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
	public static colorRGB( red: number, green: number, blue: number ): void;

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
	public static backgroundRGB( red: number, green: number, blue: number ): void;

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
	 * @description To turn off styles.
	**/
	public static styleOff( style: ANSI_Style_T ): void {}

	/**
	 * @description This method used for moving the cursor
	 * position in console.
	**/
	public static move( x: number, y: number ): void;

	/**
	 * @description This method used for moving the cursor
	 * column in console.
	**/
	public static moveCol( x: number ): void;

	/**
	 * @description This method move the cursor position in
	 * (x=0, y=0) in console.
	**/
	public static moveHome(): void;

	/**
	 * @description This method is used to move the cursor
	 * in different directions.
	**/
	public static cursorWalk( direction: ANSI_Cursor_Movement_T, value?: number ): void;

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
	public static erase( mode?: ANSI_Erase_T ): void;
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
	public static color( color: ColorParam_T ): string;

	/**
	 * @description Used to change the background color of console
	 * texts.
	**/
	public static background( color: BgColorParam_T ): string;

	/**
	 * @description It is used to change the style of texts.
	**/
	public static fontStyle( style: ANSI_Style_T ): string;

	/**
	 * @description Makes the input printable and returns it as a printable string.
	**/
	public static prettier( ..._data: unknown[] ): string;
}

/**
 * @description This class is used to style text in a chain.
**/
export type StyleFunction = ( text: string ) => string;

/**
 * @description The main `Styler` interface that represents
 * a chainable and callable style builder.
**/
export interface IStyler {
	/**
	 * @description Applies all accumulated styles to the given text.
	 * @param text The text to style.
	 * @returns The styled text string.
	 */
	(text: string): string;

	/**
	 * @description Applies the color style to the text.
	 */
	color( color: ColorParam_T ): IStyler;

	/**
	 * @description Applies the black color style to the text.
	 */
	black: IStyler;

	/**
	 * @description Applies the red color style to the text.
	 */
	red: IStyler;

	/**
	 * @description Applies the green color style to the text.
	 */
	green: IStyler;

	/**
	 * @description Applies the yellow color style to the text.
	 */
	yellow: IStyler;

	/**
	 * @description Applies the blue color style to the text.
	 */
	blue: IStyler;

	/**
	 * @description Applies the magenta color style to the text.
	 */
	magenta: IStyler;

	/**
	 * @description Applies the cyan color style to the text.
	 */
	cyan: IStyler;

	/**
	 * @description Applies the white color style to the text.
	 */
	white: IStyler;

	/**
	 * @description Applies the bright black color style to the text.
	 */
	brightBlack: IStyler;

	/**
	 * @description Applies the bright red color style to the text.
	 */
	brightRed: IStyler;

	/**
	 * @description Applies the bright green color style to the text.
	 */
	brightGreen: IStyler;

	/**
	 * @description Applies the bright yellow color style to the text.
	 */
	brightYellow: IStyler;

	/**
	 * @description Applies the bright blue color style to the text.
	 */
	brightBlue: IStyler;

	/**
	 * @description Applies the bright magenta color style to the text.
	 */
	brightMagenta: IStyler;

	/**
	 * @description Applies the bright cyan color style to the text.
	 */
	brightCyan: IStyler;

	/**
	 * @description Applies the bright white color style to the text.
	 */
	brightWhite: IStyler;

	/**
	 * @description Applies the background color style to the text.
	 */
	background( color: BgColorParam_T ): IStyler;

	/**
	 * @description Applies the black background color style to the text.
	 */
	bgBlack: IStyler;

	/**
	 * @description Applies the red background color style to the text.
	 */
	bgRed: IStyler;

	/**
	 * @description Applies the green background color style to the text.
	 */
	bgGreen: IStyler;

	/**
	 * @description Applies the yellow background color style to the text.
	 */
	bgYellow: IStyler;

	/**
	 * @description Applies the blue background color style to the text.
	 */
	bgBlue: IStyler;

	/**
	 * @description Applies the magenta background color style to the text.
	 */
	bgMagenta: IStyler;

	/**
	 * @description Applies the cyan background color style to the text.
	 */
	bgCyan: IStyler;

	/**
	 * @description Applies the white background color style to the text.
	 */
	bgWhite: IStyler;

	/**
	 * @description Applies the bright black background color style to the text.
	 */
	bgBrightBlack: IStyler;

	/**
	 * @description Applies the bright red background color style to the text.
	 */
	bgBrightRed: IStyler;

	/**
	 * @description Applies the bright green background color style to the text.
	 */
	bgBrightGreen: IStyler;

	/**
	 * @description Applies the bright yellow background color style to the text.
	 */
	bgBrightYellow: IStyler;

	/**
	 * @description Applies the bright blue background color style to the text.
	 */
	bgBrightBlue: IStyler;

	/**
	 * @description Applies the bright magenta background color style to the text.
	 */
	bgBrightMagenta: IStyler;

	/**
	 * @description Applies the bright cyan background color style to the text.
	 */
	bgBrightCyan: IStyler;

	/**
	 * @description Applies the bright white background color style to the text.
	 */
	bgBrightWhite: IStyler;

	/**
	 * @description Applies font styling to the text.
	 */
	bold: IStyler;

	/**
	 * @description Applies dim styling to the text.
	 */
	dim: IStyler;

	/**
	 * @description Applies italic styling to the text.
	 */
	italic: IStyler;

	/**
	 * @description Applies underline styling to the text.
	 */
	underline: IStyler;

	/**
	 * @description Applies blinking styling to the text.
	 */
	blinking: IStyler;

	/**
	 * @description Applies reverse styling to the text.
	 */
	reverse: IStyler;

	/**
	 * @description Applies hidden styling to the text.
	 */
	hidden: IStyler;

	/**
	 * @description Applies strikethrough styling to the text.
	 */
	strikethrough: IStyler;

	/**
	 * @description Make center the text.
	 */
	center: IStyler;
}

/**
 * @description The main `Styler` interface that represents
 * a chainable and callable style builder.
**/
export declare const Styler: IStyler;
