"use strict";

var gulp = require("gulp");
var merge = require("merge-stream");
var concat = require("gulp-concat");

module.exports = function() {
    var angularCopy = false;
    var frontpressConstantCopy = false;
    var javascriptDestFolder = "./build/js";
    var sampleBlogCopy  = false;
    var sampleBlogFiles = [
        "./src/js/sample-blog.module.js",
        "./src/js/sample-blog.config.js",
        "./src/js/sample-blog-main.controller.js"
    ];
    var releaseCopy = false;

    var frontPressConstantFile = ["./src/js/components/frontpress-provider/constants/frontpress.constant.js"];

    frontpressConstantCopy = gulp.src(frontPressConstantFile)
        .pipe(gulp.dest(javascriptDestFolder+"/dev"));

    angularCopy = gulp.src(["./node_modules/angular/angular.min.js", "./node_modules/angular/angular.js"])
        .pipe(gulp.dest(javascriptDestFolder));

    sampleBlogCopy = gulp.src(sampleBlogFiles)
        .pipe(concat("dev/sample-blog.js"))
        .pipe(gulp.dest(javascriptDestFolder));


    releaseCopy = gulp.src(["./release/**/*.js"])
        .pipe(gulp.dest("./build/js/release"));

    return merge(angularCopy, releaseCopy, frontpressConstantCopy, sampleBlogCopy);
};
