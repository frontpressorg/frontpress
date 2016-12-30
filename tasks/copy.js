"use strict";

var gulp = require("gulp");
var fs = require("fs");
var merge = require("merge-stream");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var iife = require("gulp-iife");
var argv = process.argv;

module.exports = function() {
    var jsCopy = false;
    var angularCopy = false;
    var otherDependenciesCopy = false;
    var javascriptDestFolder = "./build/js";
    var sampleBlogCopy  = false;
    var parsedConfigFile = JSON.parse(fs.readFileSync("./frontpress.json", "utf8"));
    var apiVersion = parsedConfigFile.apiVersion;
    var infiniteScroll = parsedConfigFile.infiniteScroll;

    var devFilesList = [
        "./src/js/frontpress.template-cache.js",
        "./src/js/frontpress.module.js",
        "./src/js/frontpress.run.js",
        "./src/js/frontpress.config.js",
        "./src/js/apis/configs-to-params/**/*.module.js",
        "./src/js/apis/configs-to-params/**/*.js",
        "./src/js/apis/"+apiVersion+"/**/*.module.js",
        "./src/js/apis/"+apiVersion+"/**/*.js",
        "./src/js/{components,filters,views}/**/*.module.js",
        "./src/js/{components,filters,views}/**/*.run.js",
        "./src/js/{components,filters,views}/**/*.factory.js",
        "./src/js/{components,filters,views}/**/*.directive.js",
        "./src/js/{components,filters,views}/**/*.value.js",
        "./src/js/{components,filters,views}/**/*.constant.js",
        "!**/*.tests.js",
        "./src/js/{components,filters,views}/**/*.js"
    ];

    var dependenciesFiles = [
        "./node_modules/angular-ui-router/release/angular-ui-router.js",
        "./node_modules/ng-infinite-scroll/build/ng-infinite-scroll.js",
        "./node_modules/angular-disqus/src/angular-disqus.js",
    ];

    var sampleBlogFiles = [
        "./src/js/sample-blog.module.js",
        "./src/js/sample-blog.config.js",
        "./src/js/sample-blog-main.controller.js"
    ];

    angularCopy = gulp.src(["./node_modules/angular/angular.min.js"])
        .pipe(gulp.dest(javascriptDestFolder));

    otherDependenciesCopy = gulp.src(dependenciesFiles)
        .pipe(concat("dev/external.js"))
        .pipe(gulp.dest(javascriptDestFolder));

    jsCopy = gulp.src(devFilesList)
        .pipe(iife({ prependSemicolon: false }))
        .pipe(concat("dev/main.js"))
        .pipe(gulp.dest(javascriptDestFolder));

    if (argv.indexOf("--production") !== -1) {
        jsCopy = gulp.src([
            javascriptDestFolder + "/dev/external.js",
            javascriptDestFolder + "/dev/main.js"
        ])
        .pipe(concat("main.js"))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(javascriptDestFolder));
    }

    sampleBlogCopy = gulp.src(sampleBlogFiles)
        .pipe(concat("dev/sample-blog.js"))
        .pipe(gulp.dest(javascriptDestFolder));

    var othersCopy = gulp.src([
        "./src/js/**/*.html",
    ])
    .pipe(gulp.dest("./build/js"));

    var releaseCopy = gulp.src([
        "./release/**/*.js"
    ])
    .pipe(gulp.dest("./build/release"));

    return merge(angularCopy, otherDependenciesCopy, othersCopy, jsCopy, sampleBlogCopy, releaseCopy);
};
