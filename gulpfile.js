const gulp = require( 'gulp' );
const clean = require( 'gulp-clean' );
const typescript = require( 'gulp-typescript' );
const webpack = require( 'webpack-stream' );
const babel = require( 'gulp-babel' );
const terser = require( 'gulp-terser' );
const replace = require( 'gulp-replace' );
const config = require( './build.config' );
const pkg = require( './package.json' );


gulp.task( 'clean:out', () => {
	return gulp.src( './dist/', { allowEmpty: true, read: false } )
		.pipe( clean() );
} );

gulp.task( 'clean:temp', () => {
	return gulp.src( [ '!./dist/main.js', './dist/**/**' ], { allowEmpty: true, read: false } )
		.pipe( clean() );
} );

gulp.task( 'tscompile', () => {
	return (
		gulp.src( [ './src/**/*.ts', './src/**/*.js' ] )
			.pipe( typescript( config.tsconfig ) )
			.pipe( gulp.dest( './dist/' ) )
	);
} );

gulp.task( 'build', () => {
	return (
		gulp.src( './dist/main.js' )
			.pipe( webpack( config.webpack ) )
			.pipe( babel( config.babel ) )
			.pipe( terser( config.terser ) )
			.pipe( replace( '@VERSION', pkg.version ) )
			.pipe( gulp.dest( './dist/' ) )
	);
} );

gulp.task( 'attach:declare', () => {
	return (
		gulp.src( './src/**/*.d.ts' )
			.pipe( gulp.dest( './dist/' ) )
	);
} );

module.exports.default = gulp.series(
	gulp.task( 'clean:out' ),
	gulp.task( 'tscompile' ),
	gulp.task( 'build' ),
	gulp.task( 'clean:temp' ),
	gulp.task( 'attach:declare' ),
);
