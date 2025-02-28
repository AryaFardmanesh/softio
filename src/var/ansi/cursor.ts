import { makeANSI } from './base';

export type ANSI_Cursor_Movement_T =
	'up'		|
	'down'		|
	'right'		|
	'left'		|
	'next'		|
	'previous'	|
	'go-up'
;

export type ANSI_Cursor_Style_T =
	'invisible'	|
	'visible'
;

export function convertTextCursorMoveToANSI( style: ANSI_Cursor_Movement_T, value: number | string ): string {
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
		default:
			return makeANSI( [ 'H' ], '' );
	}
}

export function convertTextCursorStyleToANSI( style: ANSI_Cursor_Style_T ): string {
	switch ( style ) {
		case 'invisible':
			return makeANSI( [ '25l' ], '', '?' );
		case 'visible':
			return makeANSI( [ '25h' ], '', '?' );
		default:
			return makeANSI( [ '25h' ], '', '?' );
	}
}
