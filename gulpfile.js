//ref https://webpack.github.io/docs/usage-with-gulp.html#without-webpack-stream
var gulp = require("gulp");
var gutil = require("gulp-util");
var htmlmin = require('gulp-htmlmin');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack", function (callback) {
  var config = require("./webpack.config.js");
  webpack(config, function (err, stats) {
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

