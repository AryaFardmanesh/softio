const { Out } = require( './module' );

const print = Out.shot( Out.write, {
	color: 'blue',
	background: 'red',
	style: 'underline',
} );

print( 'The text color is blue and the background is red and style is underline.' );

Out.write( 'This is a .write method.' );
Out.write( ' Hello world!' );
Out.write( '', {
	id: 1,
	name: 'test',
	info: {
		username: 'admin',
		password: 'admin',
		role: 'admin',
	},
}, '\n' );

Out.writeln( 'And this is a .writeln method.' );
Out.writeln( 'Hello world!' );
Out.writeln( {
	id: 1,
	name: 'test',
	info: {
		username: 'admin',
		password: 'admin',
		role: 'admin',
	},
} );

Out.printf( 'The Object info is %v.', { id: 'text', msg: 'hello' } );
Out.printf( ' And the admin is %v and username is %v, and this thirth params is undefined -> %v\n', true, 'Hello' );

Out.error( 'Err: The Object info is %v.', { id: 'text', msg: 'hello' } );
Out.error( ' And the admin is %v and username is %v, and this thirth params is undefined -> %v\n', true, 'Hello' );
