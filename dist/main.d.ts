// ========== Output Methods ==========

/**
 * @description This function concatenates the arguments
 * together with a whitespace and prints it in the output.
**/
export declare function write( ...message: [ unknown ] ): void;

/**
 * @description This function concatenates the arguments
 * with a blank space and creates a new line at the end
 * and prints it in the output.
**/
export declare function writeln( ...message: [ unknown ] ): void;

/**
 * @description This function is used to print a string.
 * Its approach is similar to C language. For more
 * information, refer to its documentation at the following
 * address.
 * https://github.com/AryaFardmanesh/softio/blob/main/DOCS/api.md
**/
export declare function printf( message: string, ...argv: [ unknown ] ): void;

/**
 * @description This function is implemented to print an error
 * message. Its approach is similar to the 'printf' function,
 * except that you write the input method to the operating system's
 * 'stderr' instead of 'stdout'.
**/
export declare function error( message: string, ...argv: [ unknown ] ): void;

// ========== Output Methods ==========


// ========== Input Methods ==========

/**
 * @description The function reads a value from the input and
 * returns it.
**/
export declare function input( message: string ): Promise<string>;

/**
 * @description This function takes a confirmation from the
 * user and returns the result as a boolean.
**/
export declare function confirm( message: string ): Promise<boolean>;

/**
 * @description This function takes a number from the input
 * and returns it as a Number type.
**/
export declare function readNumber( message: string ): Promise<number>;

// ========== Input Methods ==========


// ========== Attributes Methods ==========

// TODO: The accessors(getter/setter) in this file cannot be exported
// correctly. URL="https://github.com/AryaFardmanesh/softio/issues/15"

// ========== Attributes Methods ==========


// ========== Helper Methods ==========

/**
 * @description This function will center and return the text
 * in the Word document. (This function does not print anything.)
**/
export declare function center( message: string ): string;

/**
 * @description This function clears the current page the
 * user is viewing. 
**/
export declare function clear(): void;

// ========== Helper Methods ==========
