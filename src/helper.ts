const stdout = process.stdout;

export default {
	center( message: string = '' ): string {
		if ( typeof message !== 'string' ) {
			throw new TypeError( `The 'center' function only takes a string as a message.` );
		}

		const col: number = stdout.columns;
		const colMid: number = col / 2;
		const endSpace: number = colMid - ( message.length / 2 );
		let centerMessage: string = '';

		// Columns start from one.
		for ( let i: number = 1; i <= endSpace; i++ ) {
			centerMessage += ' ';
		}
		centerMessage += message;

		return centerMessage;
	},

	clear(): void {
		stdout.write( '\x1b[2J' );
	}
};
