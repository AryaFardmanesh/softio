import typeCheck from "./utils/type-check";

const stdout = process.stdout;

export default {
	center( message: string = '' ): string {
		typeCheck( 'center', 'string', message );

		const endSpace: number = ( stdout.columns / 2 ) - ( message.length / 2 );
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
