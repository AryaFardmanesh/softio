const { Attr } = require( '../module' );

Attr.move( 10, 10 );
Attr.cursorSave( 'SCO' );
console.log( 'Hello' );

Attr.move( 20, 20 );
Attr.cursorRestore( 'SCO' );
console.log( 'Hello' );
