var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var merge = require('merge-stream');


module.exports = function() {

    var javascriptDestFolder = './build/js/lib';

    var angularSourceFolder = ['./assets/angular/angular.js'];
    var uiRouterSourceFolder = ['./assets/angular-ui-router/release/angular-ui-router.min.js'];

    var angularCopyOptions = {prefix: 2};
    var imagesCopyOptions = {prefix: 2};
    var uiRouterCopyOptions = {prefix: 3};

    var angularCopy = gulp.src(angularSourceFolder).pipe(gulpCopy(javascriptDestFolder, uiRouterCopyOptions));
    var uiRouterCopy = gulp.src(uiRouterSourceFolder).pipe(gulpCopy(javascriptDestFolder, uiRouterCopyOptions));
    var imagesCopy = gulp.src(['./src/images/**/*.*']).pipe(gulpCopy('./build/images', imagesCopyOptions));

    var jsPath = gulp.src([
        './src/js/**/*.js',
        './src/js/**/*.html',
        './src/js/**/*.css'
    ])
    .pipe(gulp.dest('./build/js'));

    return merge(angularCopy, uiRouterCopy, imagesCopy, jsPath);
};
