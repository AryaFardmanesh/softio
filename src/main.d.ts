/**
	Softio main.d.ts file:
	This file is for describing the methods provided in softio.
	We plan to gradually introduce Tom Script into the project.
	This file is not used at the moment, we only declare the existing
	APIs and the APIs that we plan to implement in the future in this
	file so that we can implement Tom Script in the future.
**/

/**
 * @description All ANSI codes for text color.
**/
declare enum ANSIFontColor {}

/**
 * @description All ANSI codes for background color.
**/
declare enum ANSIBgColor {}

/**
 * @description All ANSI codes for font style.
**/
declare enum ANSIFont {}

/**
 * @description Names of all console events.
**/
declare enum ConEventT {
	close,
	error,
	prefinish,
	finish,
	drain,
	data,
	end,
	readable,
	resize,
}

/**
 * @description An object of all the terminal features.
**/
declare type ConStylesT = {
	color ?: ANSIFontColor,
	background ?: ANSIBgColor,
	font ?: ANSIFont,
}

/**
 * @description The main object of the library.
**/
declare class softio {
	// ==================== Output APIs ====================
	/**
	 * @description This method is used to display a message to the user.
	**/
	public static write( message: any ): void;

	/**
	 * @description This method is used to display a message to the user.
	 * Automatically adds a new line at the end of the message.
	**/
	public static writeln( message: any ): void;

	/**
	 * @description This method is for displaying information and
	 * concatenates all inputs together with a space and prints them
	 * in the output.
	**/
	public static print( ...message: any ): void;

	/**
	 * @description This method reads the message and wherever the
	 * message reaches `%v`, it replaces one of the values ​​of 'args'
	 * in order.
	**/
	public static printf( message: string, ...args: any ): void;

	/**
	 * @description This method applies the style to the console before
	 * printing the message, then displays the message, and at the end
	 * of its work, returns the console style to its previous state.
	**/
	public static shot( message: any, style: ConStylesT ): void;

	/**
	 * @description This method is used to display an error message on
	 * the console. This method writes the input message to the operating
	 * system's 'stderr'.
	**/
	public static error( message: any ): void;
	// ==================== Output APIs ====================

	// ==================== Input APIs ====================
	/**
	 * @async
	 * @description This method reads data from the user's keyboard
	 * and returns it. This method reads a line from the user.
	**/
	public static input( message: string ): string;

	/**
	 * @async
	 * @description This method reads only one character from the input.
	**/
	public static readChar(): string;

	/**
	 * @async
	 * @description This method reads a number from the input. If the
	 * format is incorrect, it returns 'NaN'.
	**/
	public static readNumber(): number;

	/**
	 * @async
	 * @description This method takes a boolean value from the user
	 * and returns it as a boolean. The input value can contain the
	 * following characters (case-insensitive):
	 * - 'true': true
	 * - 'false': false
	 * - 'y': true
	 * - 'n': false
	 * - '1': true
	 * - '0': false
	 * - 'other characters': false
	**/
	public static readBoolean(): boolean;
	// ==================== Input APIs ====================

	// ==================== Style APIs ====================
	/**
	 * @description This method is for setting the console style.
	**/
	public static attributes( style: ConStylesT ): void;

	/**
	 * @description This method is used to get the console
	 * style object.
	**/
	public static getAttr(): ConStylesT;

	/**
	 * @description This method returns the console style to the default.
	**/
	public static resetAttr(): void;

	/**
	 * @description This accessor returns the console text color or sets it.
	**/
	public static get color(): ANSIFontColor;
	public static set color( value: ANSIFontColor );

	/**
	 * @description This accessor returns the console text style or sets it.
	**/
	public static get font(): ANSIFont;
	public static set font( value: ANSIFont );

	/**
	 * @description This accessor returns the console background color or sets it.
	**/
	public static get background(): ANSIBgColor;
	public static set background( value: ANSIBgColor );
	// ==================== Style APIs ====================

	// ==================== Event APIs ====================
	/**
	 * @description This method is used to set an event in console.
	**/
	public static addEventListener( eventName: ConEventT, listener: Function ): void;

	/**
	 * @description This method is used to delete a set event. After deleting
	 * the event, the function associated with that event is returned.
	**/
	public static removeEventListener( eventName: ConEventT ): Function;
	// ==================== Event APIs ====================
}
