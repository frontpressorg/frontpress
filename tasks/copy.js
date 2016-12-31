var gulp = require("gulp");
var merge = require("merge-stream");
var concat = require("gulp-concat");

module.exports = function() {
    var angularCopy = false;
    var javascriptDestFolder = "./build/js";
    var sampleBlogFiles = false;
    var sampleBlogCopy  = false;    

    var sampleBlogFiles = [
        "./src/js/sample-blog.module.js",
        "./src/js/sample-blog.config.js",
        "./src/js/sample-blog-main.controller.js"
    ];

    angularCopy = gulp.src(["./node_modules/angular/angular.min.js", "./node_modules/angular/angular.js"])
        .pipe(gulp.dest(javascriptDestFolder));

    sampleBlogCopy = gulp.src(sampleBlogFiles)
        .pipe(concat("dev/sample-blog.js"))
        .pipe(gulp.dest(javascriptDestFolder));


    var releaseCopy = gulp.src([
        "./release/**/*.js"
    ])
    .pipe(gulp.dest("./build/js/release"));    

    return merge(angularCopy, releaseCopy, sampleBlogCopy);
};
