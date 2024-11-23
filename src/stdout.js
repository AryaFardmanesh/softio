const softio = require("./softio");

const stdout = process.stdout;

/**
 * @function write
 * @param { any } message
 * @returns { undefined }
 * @description This function used for print data on the screen.
**/
softio.write = function ( message ) {
	if ( typeof message?.toString === 'function' ) {
		message = message.toString();
	}else if ( typeof message === 'undefined' ) {
		message = 'undefined';
	}else {
		message = '<Unknown>';
	}

	stdout.write( message );
}
