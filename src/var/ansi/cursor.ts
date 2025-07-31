import { makeANSI } from './base';
import {
	ANSI_Cursor_Movement_T,
	ANSI_Cursor_Style_T
} from '../../main.d';

export function convertTextCursorMoveToANSI( style: ANSI_Cursor_Movement_T, value: number ): string {
	const valueType = typeof value;

	if ( valueType != 'number' ) {
		throw new TypeError( `The value must be a number, but you set it to ${ valueType }.` );
	}

	switch ( style ) {
		case 'up':
			return makeANSI( [ value, 'A' ], '' );
		case 'down':
			return makeANSI( [ value, 'B' ], '' );
		case 'right':
			return makeANSI( [ value, 'C' ], '' );
		case 'left':
			return makeANSI( [ value, 'D' ], '' );
		case 'next':
			return makeANSI( [ value, 'E' ], '' );
		case 'previous':
			return makeANSI( [ value, 'F' ], '' );
		case 'go-up':
			return makeANSI( [ 'M' ], '' );
		case 'home':
			return makeANSI( [ 'H' ], '' );
		default:
			throw new TypeError( `The cursor movement '${ style }' is invalid move.` );
	}
}

export function convertTextCursorStyleToANSI( style: ANSI_Cursor_Style_T ): string {
	switch ( style ) {
		case 'invisible':
			return makeANSI( [ '25' ], 'l', '?' );
		case 'visible':
			return makeANSI( [ '25' ], 'h', '?' );
		default:
			throw new TypeError( `The cursor style '${ style }' is invalid style.` );
	}
}
