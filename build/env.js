const path = require( 'node:path' );
const fs = require( 'node:fs' );

const argv = process.argv;
argv.shift();
argv.shift();

const validModes = [
	'none',
	'production',
	'development'
];

void ( async function ( argv ) {

	const mode = argv[ 0 ];

	if ( !mode ) {
		console.log( `Error: No mode set.` );
		process.exit( 0 );
	}

	if ( !validModes.includes( mode ) ) {
		console.error( `Error: Invalid env mode seted.` );
		console.log( `The valid mode: ${ validModes.join( ' | ' ) }` );
		process.exit( 1 );
	}

	const envFilePath = path.join( process.cwd(), 'env.json' );

	if ( !( await fs.existsSync( envFilePath ) ) ) {
		console.error( `Error: Cannot find env.json file at root project.` );
		process.exit( 1 );
	}

	// Get env.json file
	const envFileContent = await fs.readFileSync( envFilePath, 'utf-8' );
	let envFileJSON = JSON.parse( envFileContent );

	// Set env.json 'env' property.
	const oldEnv = envFileJSON.env;
	envFileJSON.env = mode;
	envFileJSON = JSON.stringify( envFileJSON );

	// Save file
	await fs.writeFileSync( envFilePath, envFileJSON, 'utf-8' );

	console.log( `Env was change successfully form '${ oldEnv }' to '${ mode }'.` );
	process.exit( 0 );

} )( argv );
