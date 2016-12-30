"use strict";

var gulp = require("gulp");

module.exports = function() {
    return  gulp.task("build", function() {
        gulp.start("pre-commit", "templateCache", "copy", "inject");
    });
};
