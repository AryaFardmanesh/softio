const path = require( 'node:path' );
const tsconfig = require( './tsconfig.json' );

const babelConfig = {
	// The terser config document https://babeljs.io/docs/configuration
	presets: [ '@babel/env' ]
};

const webpackConfig = {
	// The webpack configuration document https://webpack.js.org/configuration/
	mode: 'production',
	target: 'node',
	output: {
		libraryTarget: 'commonjs2'
	}
};

module.exports = {
	babel: babelConfig,
	terser: terserConfig,
	webpack: webpackConfig,
	tsconfig: tsconfig.compilerOptions
};
