export default class TestUtils {
	public static random( min: number, max: number ): number {
		return Math.floor( Math.random() * ( max - min ) + min );
	}

	public static randomChar( min: string, max: string ): string {
		const minOrd = min.charCodeAt( 0 );
		const maxOrd = max.charCodeAt( 0 ) + 1;
		const char = this.random( minOrd, maxOrd );

		return String.fromCharCode( char );
	}

	public static randomHex( len: number = 6 ): string {
		let hex = '#';

		for ( let i = 0; i < len; i++ ) {
			const chance = this.random( 0, 2 );

			if ( chance ) {
				hex += this.randomChar( 'A', 'F' );
			}else {
				hex += this.randomChar( 'a', 'f' );
			}
		}

		return hex;
	}
}
