import formatMessage from "./utils/format-msg";
import parserMessageArray from "./utils/parse-msg-arr";
import typeCheck from "./utils/type-check";

const stdout = process.stdout;
const stderr = process.stderr;

export default {
	write( ...message: unknown[] ): void {
		const messageStr: string = parserMessageArray( message );
		stdout.write( messageStr );
	},

	writeln( ...message: unknown[] ): void {
		const messageStr: string = parserMessageArray( message ) + '\n';
		stdout.write( messageStr );
	},

	printf( message: string = '', ...argv: unknown[] ): void {
		typeCheck( 'printf', 'string', message );

		message = formatMessage( message, ...argv );

		stdout.write( message );
	},

	error( message: string = '', ...argv: unknown[] ): void {
		typeCheck( 'error', 'string', message );

		message = formatMessage( message, ...argv );

		stderr.write( message );
	},
};
