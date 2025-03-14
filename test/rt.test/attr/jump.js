const { Attr } = require( '../module' );

Attr.move( 10, 10 );
Attr.cursorSave();
console.log( 'Hello' );

Attr.move( 20, 20 );
Attr.cursorRestore();
console.log( 'Hello' );
