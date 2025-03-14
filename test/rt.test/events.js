const { Events } = require( './module' );

Events.addEventListener( 'resize', () => {
	console.log( `Window was resized! - col=${ process.stdout.columns } and row=${ process.stdout.rows }` );
} );

// Just to keep the program running
setInterval( () => {}, 1000 );
