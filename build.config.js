const path = require( 'node:path' );

const sep = path.sep;

const distDirPath = path.join( __dirname, ( 'dist' + sep ) );
const srcDirPath = path.join( __dirname, ( 'src' + sep ) );
const srcFilePath = path.join( srcDirPath, '/**/*.js' );

const babelConfig = {
	presets: [ '@babel/env' ]
};

const terserConfig = {
	// The terser config https://github.com/terser/terser#minify-options
};

module.exports = {
	entry: srcFilePath,
	output: distDirPath,
	babel: babelConfig,
	terser: terserConfig,
};
