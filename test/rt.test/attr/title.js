const { Attr } = require( '../module' );

const title = Attr.title;
console.log( `The terminal title is ${ title }.` );

const newTitle = 'Real Time Test for SoftIO';
Attr.title = newTitle;
console.log( `Now it's change to '${ newTitle }'.` );

if ( Attr.title !== newTitle ) {
	console.error( `Maybe it's not change!` );
	console.error( `Exit program with 1.` );
	process.exit( 1 );
}
