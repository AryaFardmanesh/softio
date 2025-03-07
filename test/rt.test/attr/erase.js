const { Attr } = require( '../module' );

console.log( 'Start...' );
console.log( 'Hello world!' );
console.log( 'Test.' );

Attr.erase( 'entire' );

console.log( 'Temp...' );

Attr.erase( 'cursor-to-beginning' );

console.log( 'Clean entire screen.' );
