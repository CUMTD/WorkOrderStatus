const path = require('path');
const merge = require('webpack-merge');
const common = require('./wp-common.webpack.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outPath = path.join(__dirname, 'content/js-prod');

module.exports = merge(common, {
	devtool: '#source-map',
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin()
	]
});
