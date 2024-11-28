const path = require( 'node:path' );
const tscofig = require( './tsconfig.json' );

const sep = path.sep;

const distDirPath = path.join( __dirname, ( 'dist' + sep ) );
const privateDistDirPath = path.join( __dirname, ( '_dist' + sep ) );
const compiledFilePath = path.join( privateDistDirPath, 'main.js' );
const srcDirPath = path.join( __dirname, ( 'src' + sep ) );
const srcFilePath = path.join( srcDirPath, '/**/*.ts' );

const babelConfig = {
	presets: [ '@babel/env' ]
};

const terserConfig = {
	// The terser config document https://github.com/terser/terser#minify-options
};

const webpackConfig = {
	// The webpack configuration document https://webpack.js.org/configuration/
	mode: 'production'
};

module.exports = {
	entry: srcFilePath,
	output: distDirPath,
	compiledDirPath: privateDistDirPath,
	compiledFilePath: compiledFilePath,
	babel: babelConfig,
	terser: terserConfig,
	webpack: webpackConfig,
	tscofig: tscofig.compilerOptions
};
