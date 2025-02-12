const { In } = require( './module' );

const name = In.input( 'Enter your name: ' );
const age = In.readNumber( 'Enter your age: ' );
const login = In.confirm( 'Do you want to login into this app ?' );
const pass = In.password( 'Enter your password: ', '*' );

console.log( 'name:', name );
console.log( 'age:', age );
console.log( 'confirm:', login );
console.log( 'password:', pass );
