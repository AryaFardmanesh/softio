const gulp = require( 'gulp' );
const clean = require( 'gulp-clean' );
const typescript = require( 'gulp-typescript' );
const webpack = require( 'webpack-stream' );
const babel = require( 'gulp-babel' );
const terser = require( 'gulp-terser' );
const replace = require( 'gulp-string-replace' );
const writeFooter = require( 'gulp-footer' );
const config = require( './build.config' );
const pkg = require( './package.json' );


/**
 * @name clean
 * @description This Gulp task used for clean dist/ and _dist/ directory.
**/
gulp.task( 'clean', () => {
	return (
		gulp.src( [ config.output, config.compiledDirPath ], { allowEmpty: true, read: false } )
			.pipe( clean() )
	);
} );

/**
 * @name clean:private
 * @description This Gulp task used for clean _dist/ directory.
**/
gulp.task( 'clean:private', () => {
	return (
		gulp.src( config.compiledDirPath, { allowEmpty: true, read: false } )
			.pipe( clean() )
	);
} );

/**
 * @name tscompile
 * @description This Gulp task used compile TypeScript to JavaScript.
**/
gulp.task( 'tscompile', () => {
	return (
		gulp.src( config.entry )
			.pipe( typescript( config.tscofig ) )
			.pipe( gulp.dest( config.compiledDirPath ) )
	);
} );

/**
 * @name build
 * @description This Gulp task used build the project.
**/
gulp.task( 'build', () => {
	return (
		gulp.src( config.compiledFilePath )
			.pipe( webpack( config.webpack ) )
			.pipe( babel( config.babel ) )
			.pipe( terser( config.terser ) )
			.pipe( gulp.dest( config.output ) )
	);
} );

/**
 * @name patch
 * @description This Gulp task used for patch 'export' to the final file.
**/
gulp.task( 'patch', () => {
	return (
		gulp.src( config.outputWithFileName )
			.pipe( writeFooter( 'module.exports=softio.softio;' ) )
			.pipe( replace( '@VERSION', pkg.version ) )
			.pipe( gulp.dest( config.output ) )
	);
} );

/**
 * @name append:d
 * @description This Gulp task used for, move main.d.ts file to /dist/ directory
**/
gulp.task( 'append:d', () => {
	return (
		gulp.src( config.declareFilePath )
			.pipe( gulp.dest( config.output ) )
	);
} );

/**
 * @name default
 * @description The default Gulp task.
**/
module.exports.default = gulp.series(
	gulp.task( 'clean' ),
	gulp.task( 'tscompile' ),
	gulp.task( 'build' ),
	gulp.task( 'patch' ),
	gulp.task( 'clean:private' ),
	gulp.task( 'append:d' )
);
