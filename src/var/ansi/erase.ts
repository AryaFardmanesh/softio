import { makeANSI } from './base';
import { ANSI_Erase_T } from '../../main.d';

export function convertTextEraseToANSI( style: ANSI_Erase_T ): string {
	switch ( style ) {
		case 'in-display':
			return makeANSI( [ 'J' ], '' );
		case 'cursor-until-end':
			return makeANSI( [ '0J' ], '' );
		case 'cursor-to-beginning':
			return makeANSI( [ '1J' ], '' );
		case 'entire':
			return makeANSI( [ '2J' ], '' );
		case 'saved-lines':
			return makeANSI( [ '3J' ], '' );
		case 'in-line':
			return makeANSI( [ 'K' ], '' );
		case 'cursor-until-end-line':
			return makeANSI( [ '0K' ], '' );
		case 'start-line-until-cursor':
			return makeANSI( [ '1K' ], '' );
		case 'entire-line':
			return makeANSI( [ '2K' ], '' );
		default:
			return makeANSI( [ '2J' ], '' );
	}
}
