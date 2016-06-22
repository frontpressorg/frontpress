var gulp = require('gulp');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');

module.exports = function () {
  return gulp.src('./src/styl/style.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./build/css/'));
}
