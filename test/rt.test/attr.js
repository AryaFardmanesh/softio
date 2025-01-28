const { Attr } = require( './module' );

console.log( 'Title:', Attr.title );
Attr.title = 'Test Softio in the real-time.';
console.log( 'Title:', Attr.title );

console.log( `The terminal width is ${ Attr.width } and height is ${ Attr.height }.` );
