/**
 * @description Installed package version.
*/
export declare const version: string;

/**
 * @description This class is for output methods.
*/
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
}

/**
 * @description This class is for input methods.
*/
export declare class In {
	/**
	 * @description This method is used to get data from
	 * the input.
	**/
	public static input( message?: string ): Promise<string>;

	/**
	 * @description Used to obtain user consent.
	**/
	public static confirm( message?: string ): Promise<boolean>;

	/**
	 * @description It is used to get a number from the
	 * input.
	**/
	public static readNumber( message?: string ): Promise<number>;
}

/**
 * @description This class is for attributes methods.
*/
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
}

declare type EventTypesT =
	'close' 	|
	'error' 	|
	'prefinish' 	|
	'finish' 	|
	'drain' 	|
	'data' 		|
	'end' 		|
	'readable' 	|
	'resize'
;

/**
 * @description This class is for event-related methods.
*/
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
 * @description This class is for utilities methods.
*/
export declare class Utilities {
	/**
	 * @description It centeralize the message in the middle
	 * of the console screen and returns it.
	**/
	public static center( message: string ): string;

	/**
	 * @description Clears the console screen.
	**/
	public static clear(): void;
}
