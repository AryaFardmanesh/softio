const { Attr } = require( '../module' );

console.log( 'Start...' );

Attr.cursorWalk( 'right', 10 );
console.log( 'Move the cursor to right.' );

Attr.moveCol( 5 );
Attr.cursorWalk( 'left', 2 );
console.log( 'Move the cursor to left.' );

console.log('\t\t\t - ...');
Attr.cursorWalk( 'up' );
console.log( 'Move the cursor to up.' );

console.log('\t\t\t - ...');
Attr.cursorWalk( 'up', 2 );
Attr.cursorWalk( 'down' );
console.log( 'Move the cursor to down.' );

console.log('\t\t\t - ...');
Attr.cursorWalk( 'previous' );
console.log( 'Move the cursor to previous.' );

console.log('\t\t\t     - ...');
Attr.cursorWalk( 'previous', 2 );
Attr.cursorWalk( 'next' );
console.log( 'Move the cursor to next.' );
