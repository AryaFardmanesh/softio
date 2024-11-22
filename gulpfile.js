const gulp = require( 'gulp' );
const clean = require( 'gulp-clean' );
const babel = require( 'gulp-babel' );
const config = require( './build.config' );


/**
 * @name clean
 * @description This Gulp task used for clean dist/ directory.
**/
gulp.task( 'clean', () => {
	return (
		gulp.src( config.output, { allowEmpty: true, read: false } )
			.pipe( clean() )
	);
} );

/**
 * @name build
 * @description This Gulp task used build the project.
**/
gulp.task( 'build', () => {
	return (
		gulp.src( config.entry )
			.pipe( babel( config.babel ) )
			.pipe( gulp.dest( config.output ) )
	);
} );

/**
 * @name default
 * @description The default Gulp task.
**/
module.exports.default = gulp.series(
	gulp.task( 'clean' ),
	gulp.task( 'build' )
);
