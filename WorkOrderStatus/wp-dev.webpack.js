const path = require('path');
const merge = require('webpack-merge');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const common = require('./wp-common.webpack.js');

module.exports = merge(common, {
	devtool: '#inline-source-map',
	mode: 'development',
	plugins: [
		new HardSourceWebpackPlugin(
			{
				environmentHash: {
					root: process.cwd(),
					directories: [],
					files: ['yarn.lock']
				}
			})
	]
});
