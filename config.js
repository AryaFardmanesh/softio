const path = require( 'node:path' );
const nodeExternals = require( 'webpack-node-externals' );
const tsconfig = require( './tsconfig.json' );

const webpackConfig = {
	// The webpack configuration document https://webpack.js.org/configuration/
	mode: 'production',
	target: 'node',
	output: {
		libraryTarget: 'commonjs2'
	},
	optimization: {
		minimize: false,
	},
	externals: [
		nodeExternals()
	]
};

module.exports = {
	babel: babelConfig,
	webpack: webpackConfig,
	tsconfig: tsconfig.compilerOptions
};
