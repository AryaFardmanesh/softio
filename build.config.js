const path = require( 'node:path' );
const env = require( './env.json' );

const sep = path.sep;

const distDirPath = path.join( __dirname, ( 'dist' + sep ) );
const srcDirPath = path.join( __dirname, ( 'src' + sep ) );
const srcFilePath = path.join( srcDirPath, 'main.js' );

const mode = env?.env || 'development';

const webpackConfig = {
	mode: mode,
	output: {
		library: 'softio',
		libraryTarget: 'umd'
	},
	target: 'node'
};

module.exports = {
	entry: srcFilePath,
	output: distDirPath,
	webpack: webpackConfig,
};
