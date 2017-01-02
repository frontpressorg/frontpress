"use strict";

var gulp = require("gulp");
var p = require('path');
var symlink = require("gulp-sym");

module.exports = function() {
    return gulp.src('ci/pre-commit')
        .pipe(symlink(function(source) {
            return p.join('.git/hooks/', source.relative.split(p.sep)[0]);
        }, { force: true }));
};
