module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		publicPath: "dist"
	},
	devServer: {
		host: "192.168.1.100",
		port: 8080,
		disableHostCheck: true
	}
};
