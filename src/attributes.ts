const stdout = process.stdout;

export default {
	get title(): string {
		return process.title;
	},

	set title( value: string ) {
		if ( typeof value === 'undefined' ) {
			value = this.title;
		}else if ( typeof value !== 'string' ) {
			throw new TypeError( `The 'title' property only takes a string as a title.` );
		}

		process.title = value;
	},

	get width(): number {
		return stdout.columns;
	},

	get height(): number {
		return stdout.rows;
	}
};
