const stdout = process.stdout;

export default {
	center( message: string = '' ): string {
		if ( typeof message !== 'string' ) {
			throw new TypeError( `The 'center' function only takes a string as a message.` );
		}

		let centerMessage: string = '';
		const col: number = stdout.columns;
		const msgLen: number = message.length;
		const midPos: number = ( col / 2 ) - ( msgLen / 2 );

		for ( let i: number = 0; i < midPos; i++ ) {
			centerMessage += ' ';
		}

		return ( centerMessage + message );
	},

	clear(): void {
		stdout.write( '\x1b[2J' );
	}
};
