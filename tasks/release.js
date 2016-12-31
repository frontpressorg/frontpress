var gulp = require("gulp");
var merge = require("merge-stream");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');

module.exports = function() {
    var jsCopy = false;
    var dependenciesCopy = false;
    var javascriptDestFolder = "./release";

    var dependenciesFiles = [
        "./node_modules/angular-ui-router/release/angular-ui-router.js",
        "./node_modules/ng-infinite-scroll/build/ng-infinite-scroll.js",
        "./node_modules/angular-disqus/src/angular-disqus.js"
    ];

    var devFilesList = [
        "./src/js/frontpress.template-cache.js",
        "./src/js/frontpress.module.js",
        "./src/js/frontpress.config.js",
        "./src/js/frontpress.run.js",
        "./src/js/apis/configs-to-params/**/*.module.js",
        "./src/js/apis/configs-to-params/**/*.js",
        "./src/js/{components,filters,views}/**/*.module.js",
        "./src/js/{components,filters,views}/**/*.run.js",
        "./src/js/{components,filters,views}/**/*.factory.js",
        "./src/js/{components,filters,views}/**/*.directive.js",
        "./src/js/{components,filters,views}/**/*.value.js",
        "./src/js/{components,filters,views}/**/*.constant.js",
        "!**/*.tests.js",
        "!./src/js/components/frontpress-provider/constants/frontpress.constant.js",
        "!./src/js/sample-blog.module.js",
        "!./src/js/sample-blog.config.js",
        "!./src/js/sample-blog-main.controller.js",
        "./src/js/{components,filters,views}/**/*.js"
    ];

    var v1DevFileList = [
        "./src/js/apis/v1/**/*.module.js",
        "./src/js/apis/v1/**/*.js"
    ];

    var v2DevFileList = [
        "./src/js/apis/v2/**/*.module.js",
        "./src/js/apis/v2/**/*.js"
    ];

    var v1FileList = dependenciesFiles.concat(devFilesList).concat(v1DevFileList);
    var v2FileList = dependenciesFiles.concat(devFilesList).concat(v2DevFileList);

    v1Concat = gulp.src(v1FileList)
        .pipe(concat("frontpress.v1.js"))
        .pipe(gulp.dest(javascriptDestFolder))

    v2Concat = gulp.src(v2FileList)
        .pipe(concat("frontpress.js"))
        .pipe(gulp.dest(javascriptDestFolder))

    v1ConcatAndMinify = gulp.src(v1FileList)
        .pipe(concat("frontpress.v1.min.js"))
        .pipe(gulp.dest(javascriptDestFolder))
        .pipe(uglify())
        .pipe(gulp.dest(javascriptDestFolder));

    v2ConcatAndMinify = gulp.src(v2FileList)
        .pipe(concat("frontpress.min.js"))
        .pipe(gulp.dest(javascriptDestFolder))
        .pipe(uglify())
        .pipe(gulp.dest(javascriptDestFolder));

    return merge(v1ConcatAndMinify, v2ConcatAndMinify);
};
