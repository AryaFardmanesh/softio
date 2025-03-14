const { Attr, Out } = require( '../module' );

Attr.color( 'blue' );
console.log( 'Color set to blue.' );
Attr.reset();

Attr.color( 48 );
console.log( 'Color set to green.' );
Attr.reset();

Attr.colorHex( '#718093' );
console.log( 'Color set to gray.' );
Attr.reset();

Attr.colorHex( '00a8ff' );
console.log( 'Color set to sky blue.' );
Attr.reset();

Attr.colorRGB( 140, 122, 230 );
console.log( 'Color set to purple.' );
Attr.reset();

Attr.color( 'default' );
console.log( 'Color set to default.' );
Attr.reset();


Attr.background( 'blue' );
Out.write( 'Background color set to blue.' );
Attr.reset();

Attr.background( 48 );
Out.write( 'Background color green.' );
Attr.reset();

Attr.backgroundHex( '#718093' );
Out.write( 'Background color gray.' );
Attr.reset();

Attr.backgroundHex( '00a8ff' );
Out.write( 'Background color sky blue.' );
Attr.reset();

Attr.backgroundRGB( 140, 122, 230 );
Out.write( 'Background color purple.' );
Attr.reset();

Attr.background( 'default' );
Out.write( 'Background color default.' );
Attr.reset();
