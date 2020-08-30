const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		vendors: ['react', 'antd']
	},
	
	output: {
		path: path.resolve(__dirname, '../build'),
		library: '[name]_library',
		filename: '[name].dll.js',
	},
	
	plugins: [
		new webpack.DllPlugin({
			context: __dirname,
			path: path.join(__dirname, '../build', '[name].manifest.json')
		})
	]
}
