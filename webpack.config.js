//ref https://github.com/webpack/docs/wiki/optimization
var webpack = require("webpack");
var path = require("path");
module.exports = {
  entry: {
    hello: ["./src/app/hello.js"]
  },
  output: {
    path: path.resolve(__dirname, "build", "assets"),
    publicPath: "/assets/",
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

