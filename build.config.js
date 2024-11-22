const path = require( 'node:path' );

const sep = path.sep;

const distDirPath = path.join( __dirname, ( 'dist' + sep ) );
const srcDirPath = path.join( __dirname, ( 'src' + sep ) );
const srcFilePath = path.join( srcDirPath, '/**/*.js' );

const babelConfig = {
	presets: [ '@babel/env' ]
};

module.exports = {
	entry: srcFilePath,
	output: distDirPath,
	babel: babelConfig,
};
