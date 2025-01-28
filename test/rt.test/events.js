const { Events, In } = require( './module' );

function winResize() {
	console.log( `Window was resized! - col=${ process.stdout.columns } and row=${ process.stdout.rows }` );
}

Events.addEventListener( 'resize', winResize );

console.log( 'Resize the terminal window.' );

void ( async function () {

	await In.input( 'Skip ? ' );

	Events.removeEventListener( 'resize' );

	console.log( 'The resize event was removed.' );

	await In.input( 'Exit ? ' );

} )();
