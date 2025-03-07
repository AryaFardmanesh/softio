const { Attr } = require( '../module' );

Attr.color( 'blue' );
console.log( 'Color set to blue.' );

Attr.color( 48 );
console.log( 'Color set to green.' );

Attr.colorHex( '#718093' );
console.log( 'Color set to gray.' );

Attr.colorHex( '00a8ff' );
console.log( 'Color set to sky blue.' );

Attr.colorRGB( 140, 122, 230 );
console.log( 'Color set to purple.' );

Attr.color( 'default' );
console.log( 'Color set to default.' );


Attr.background( 'blue' );
console.log( 'Background color set to blue.' );

Attr.background( 48 );
console.log( 'Background color green.' );

Attr.backgroundHex( '#718093' );
console.log( 'Background color gray.' );

Attr.backgroundHex( '00a8ff' );
console.log( 'Background color sky blue.' );

Attr.backgroundRGB( 140, 122, 230 );
console.log( 'Background color purple.' );

Attr.background( 'default' );
console.log( 'Background color default.' );
