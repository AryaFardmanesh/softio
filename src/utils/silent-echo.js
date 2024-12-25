/*
	Basically this function is a prettier for
	input data. The way it works is that we
	mock the process.stdout.write method and
	then pass the data to the console.log method,
	so that the .log method can read the input
	but not print it. Then we get the result of
	that process using the same
	process.stdout.write and pass it to the
	program flow.
*/

/**
 * @description This function passes input data
 * to the console.log function but does not tell
 * the component to print it.
 * @param  { ...unknown } data
 * @returns { string }
**/
export default function silentEcho( ...data ) {
	const orgin = process.stdout.write;
	let result = '';

	process.stdout.write = ( data ) => {
		result = data;
	};

	console.log( ...data );

	process.stdout.write = orgin;

	return result.slice( 0, -1 );
}
