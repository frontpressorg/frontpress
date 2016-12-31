"use strict";

var gulp = require("gulp"),
   p = require('path'),
   symlink = require("gulp-sym");

module.exports = function() {
    return gulp.task("pre-commit", function() {
         gulp.src('ci/pre-commit').pipe(symlink(function(source) {

            return p.join('.git/hooks/', source.relative.split(p.sep)[0]);

         }, { force: true }));
    });
};
