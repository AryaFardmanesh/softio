const readline = require( 'node:readline/promises' );

const softio = require("./softio");

const stdout = process.stdout;
const stdin = process.stdin;

/**
 * @async
 * @function input
 * @param { String } message
 * @returns { String }
 * @description This function used for get data form user in the terminal.
**/
softio.input = async function ( message ) {
	const stdinStream = readline.createInterface( { input: stdin, output: stdout } );
	const line = await stdinStream.question( message );
	stdinStream.close();
	return line;
}
