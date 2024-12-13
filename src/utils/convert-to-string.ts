import isES6Class from "./is-es6-class";

/**
 * @description This function converts the input into
 * a string so that the program can write it to stdout
 * or stderr.
**/
export default function convertToString( data: unknown ): string {

	if ( typeof data === 'function' ) {
		const kind = isES6Class( data ) ? 'Class' : 'Function';
		const name = data.name ? data.name : '(anonymous)';
		return `[${ kind }: ${ name }]`;
	}else if ( typeof data?.toString === 'function' ) {
		return data.toString();
	}else if ( data instanceof Object ) {
		// This feature is adding soon.
		throw new TypeError( 'Sorry, non-primitive data types are not yet supported.' );
	}else {
		return `${ data }`;
	}
}
