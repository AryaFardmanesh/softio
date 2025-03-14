const { Attr } = require( '../module' );

Attr.move( 10, 20 );
console.log( 'Move the cursor to 10x20.' );

Attr.moveCol( 1 );
console.log( 'Move the column position to 1.' );

Attr.moveHome();
console.log( 'Move the cursor to home (1x1).' );
