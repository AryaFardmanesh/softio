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

/**
 * @function writeln
 * @param { any } message
 * @returns { undefined }
 * @description This function used for print data and create a new line on the screen.
**/
softio.writeln = function ( message ) {
	if ( typeof message?.toString === 'function' ) {
		message = message.toString() + '\n';
	}else if ( typeof message === 'undefined' ) {
		message = '\n';
	}else {
		message = '<Unknown>';
	}

	stdout.write( message );
}
