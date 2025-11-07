import { StyleFunction } from './main.d';
import { Utils } from './main';

const styles = {
	blue: ( text: string ) => Utils.color( 'blue' ) + text,
	red: ( text: string ) => Utils.color( 'red' ) + text,
	bold: ( text: string ) => Utils.fontStyle( 'bold' ) + text,
	underline: ( text: string ) => Utils.fontStyle( 'underline' ) + text,
};

function createAttr( applied: StyleFunction[] = [] ) {
	const fn = ( text: string ) => {
		return applied.reduce( ( acc, fn ) => fn( acc ), text ) + Utils.reset();
	};

	return new Proxy( fn, {
		get( target, prop, receiver ) {
			if ( typeof prop === 'string' && prop in styles ) {
				return createAttr( [ ...applied, styles[ prop ] ] );
			}

			return Reflect.get( target, prop, receiver );
		},
	} );
}

export default createAttr();
