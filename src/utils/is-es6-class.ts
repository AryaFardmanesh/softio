/**
 * @description This method is used to detect
 * whether the input is an ES6 class.
**/
export default function isES6Class( data: Function ): boolean {
	if ( data.toString().startsWith( 'class' ) ) {
		return true;
	}

	return false;
}
