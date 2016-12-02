var gulp = require("gulp");
var fs = require("fs");
var merge = require("merge-stream");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var iife = require("gulp-iife");
var argv = process.argv;

module.exports = function() {
    var jsCopy = false;
    var dependenciesCopy = false;
    var javascriptDestFolder = "./build/js";
    var apiVersion = JSON.parse(fs.readFileSync("./frontpress.json", "utf8")).apiVersion;

    var devFilesList = [
        "./src/js/frontpress.template-cache.js",
        "./src/js/frontpress.js",
        "./src/js/frontpress.run.js",
        "./src/js/frontpress.config.js",
        "./src/js/frontpress.controller.js",
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
        "./assets/angular/angular.js",
        "./assets/angular-ui-router/release/angular-ui-router.min.js",
        "./assets/ngInfiniteScroll/build/ng-infinite-scroll.min.js",
        "./assets/defiant/dist/defiant.min.js",
        "./assets/angular-disqus/src/angular-disqus.js",
    ];

    dependenciesCopy = gulp.src(dependenciesFiles)
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

    var imagesCopy = gulp.src([
        "./src/images/**/*.*"
    ])
    .pipe(gulp.dest("./build/images"));

    var othersCopy = gulp.src([
        "./src/js/**/*.html",
        "./src/js/**/*.css"
    ])
    .pipe(gulp.dest("./build/js"));

    return merge(dependenciesCopy, imagesCopy, othersCopy, jsCopy);
};
