const { Attr } = require( '../module' );

Attr.move( 10, 20 );
console.log( 'Move the cursor to 10x20.' );

Attr.moveCol( 0 );
console.log( 'Move the column position to 0.' );

Attr.moveHome();
console.log( 'Move the cursor to home (0x0).' );
