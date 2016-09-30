//ref https://github.com/webpack/docs/wiki/optimization
var webpack = require("webpack");
var path = require("path");
var projectPath = path.resolve(__dirname, "..");
var contentBase = path.resolve(projectPath, "build");
var config = module.exports = {
  contentBase: contentBase,
  projectPath: projectPath,
  webpack: {
    entry: {
      hello: ["./src/app/hello.js"]
    },
    output: {
      path: path.resolve(contentBase, "assets"),
      publicPath: "/assets/",
      filename: "[name].js"
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
};

