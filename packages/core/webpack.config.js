module.exports = {
	entry: __dirname + '/core.js',
	output: {
		filename: 'core.es5.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: [ 'env' ],
					plugins: [
						'transform-decorators-legacy',
						'transform-class-properties'
					],
					babelrc: false
				}
			},
			{
		        test: /\.css$/,
		        use: [
		          { loader: "style-loader" },
		          { loader: "css-loader" }
		        ]
		    }
		]
	}
};