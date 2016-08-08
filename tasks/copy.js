var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var ifGulp = require('gulp-if')
var util = require('gulp-util')
var uglify = require('gulp-uglify')
var iife = require("gulp-iife");

module.exports = function() {
    var javascriptDestFolder = './build/js';

    var angularCopy = gulp.src([
        './assets/angular/angular.js',
        './assets/angular-ui-router/release/angular-ui-router.min.js',
        './assets/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
        './assets/defiant/dist/defiant.min.js',
        './assets/angular-disqus/src/angular-disqus.js',
    ])
    .pipe(concat('lib/external.js'))
    .pipe(ifGulp(util.env.production, uglify()))
    .pipe(gulp.dest(javascriptDestFolder));

    var jsCopy = gulp.src([
        './src/js/frontpress.template-cache.js',
        './src/js/frontpress.js',
        './src/js/frontpress.config.js',
        './src/js/*.js',
        './src/js/**/*.module.js',
        './src/js/**/*.run.js',
        './src/js/**/*.factory.js',
        './src/js/**/*.directive.js',
        './src/js/**/*.value.js',
        './src/js/**/*.constant.js',
        './src/js/**/*.js'
    ])
    .pipe(iife({ prependSemicolon: false }))
    .pipe(concat('app.js'))
    .pipe(ifGulp(util.env.production, uglify({mangle: false})))
    .pipe(gulp.dest(javascriptDestFolder));

    var imagesCopy = gulp.src([
        './src/images/**/*.*'
    ])
    .pipe(gulp.dest('./build/images'));

    var othersCopy = gulp.src([
        './src/js/**/*.html',
        './src/js/**/*.css'
    ])
    .pipe(gulp.dest('./build/js'));

    return merge(angularCopy, imagesCopy, othersCopy, jsCopy);
};
