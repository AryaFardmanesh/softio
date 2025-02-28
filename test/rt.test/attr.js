const { Attr } = require( './module' );

Attr.erase( 'entire' );

console.log( 'Title:', Attr.title );
Attr.title = 'Test Softio in the real-time.';
console.log( 'Title:', Attr.title );

console.log( `The terminal width is ${ Attr.width } and height is ${ Attr.height }.` );

Attr.color( 'blue' );
Attr.background( 'cyan' );
console.log( 'This text is blue and the background is cyan.' );
Attr.reset();

Attr.color( 42 );
Attr.background( 255 );
console.log( 'This text is green and the background is white.' );
Attr.reset();

Attr.colorHex( '#fbc531' );
Attr.backgroundHex( '#7f8fa6' );
console.log( 'This text is yellow and the background is gray.' );
Attr.reset();

Attr.colorRGB( 25, 42, 86 );
Attr.backgroundRGB( 220, 221, 225 );
console.log( 'This text is dark blue and the background is white.' );
Attr.reset();

Attr.style( 'bold' );
console.log( 'This text is bold.' );
Attr.reset();

Attr.reset();
console.log( 'All graphics mode reset.' );

Attr.cursorSave( 'SCO' );
Attr.move( 0, 0 );
console.log( 'Move the cursor to (0, 0) position.' );

Attr.cursorRestore( 'SCO' );
console.log( 'Restore the cursor position.' );

Attr.moveHome();
console.log( '#(Home)' );
Attr.cursorRestore( 'SCO' );
console.log( '@Back.' );

Attr.cursorWalk( 'right', 10 );
console.log( 'Move cursor to the right.' );

Attr.cursorStyle( 'invisible' );
console.log( 'change cursor style to invisible.' );
