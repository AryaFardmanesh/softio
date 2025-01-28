const { Utilities } = require( './module' );

console.log( 'Hello world!' );
console.log( 'This is a test text.' );
console.log( 'Clear method test.' );

Utilities.clear();

const txt = Utilities.center( 'Hello world!' );
console.log( txt );
