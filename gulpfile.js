//ref https://webpack.github.io/docs/usage-with-gulp.html#without-webpack-stream
var gulp = require("gulp");
var gutil = require("gulp-util");
var htmlmin = require('gulp-htmlmin');
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var config = require("./gulp/config");
var argv = require('minimist')(process.argv.slice(2));

gulp.task("webpack", function (callback) {
  webpack(config.webpack, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({}));
    callback();
  });
});

gulp.task("www", function () {
  return gulp.src("./src/www/**/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("./build"));
});

gulp.task("build", ["www", "webpack"]);

gulp.task("app:start", function () {
  var compiler = webpack(config.webpack);
  var server = new webpackDevServer(compiler, {
    contentBase: config.contentBase,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: config.webpack.output.publicPath,
    stats: {
      colors: true
    }
  });
  var host = "0.0.0.0" || 8080;
  var port = argv.port || 8080;
  server.listen(port, host, function () {
    var app = server.listeningApp;
    var httpListen = host + ":" + port;
    gutil.log("[webpack-dev-server]", "Http Listen in " + httpListen);
  });
  return;
});

