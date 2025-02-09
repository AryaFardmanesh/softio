const { In } = require( './module' );

( async function () {
	const name = await In.input( 'Enter your name: ' );
	const age = await In.readNumber( 'Enter your age: ' );
	const login = await In.confirm( 'Do you want to login into this app ?' );
	const pass = await In.password( 'Enter your password: ', '*' );

	console.log( 'name:', name );
	console.log( 'age:', age );
	console.log( 'confirm:', login );
	console.log( 'password:', pass );
} ) ();
