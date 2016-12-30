"use strict";

var gulp = require("gulp"),
  symlink = require("gulp-sym");

module.exports = function() {
    return gulp.task("pre-commit", function() {
        gulp.src('ci/pre-commit').pipe(symlink('.git/hooks/pre-commit'));
    });
};
