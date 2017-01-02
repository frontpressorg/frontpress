"use strict";

var gulp = require("gulp");

module.exports = function() {
    return gulp.start("pre-commit", "templateCache", "copy", "inject");
};
