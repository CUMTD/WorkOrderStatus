const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: '#source-map',
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	entry: {
		index: path.join(__dirname, '/ts/index.tsx')
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader'
			}
		]
	},
	output: {
		path: path.join(__dirname, 'content'),
		filename: '[name].js',
		libraryTarget: 'var',
		library: '[name]',
		sourceMapFilename: '[name].map'
	},
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	}
};
