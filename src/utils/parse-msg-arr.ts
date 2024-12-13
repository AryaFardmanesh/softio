import convertToString from "./convert-to-string";

/**
 * @description This method used for converting
 * the input array into a single string.
**/
export default function parserMessageArray( message: unknown[] ): string {
	let messageStr: string = '';

	for ( let i: number = 0; i < message.length; i++ ) {
		messageStr += convertToString( message[ i ] );

		if ( i !== message.length - 1 ) {
			messageStr += ' ';
		}
	}

	return messageStr;
}
