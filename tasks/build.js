"use strict";

var gulp = require("gulp");

module.exports = function() {
    return gulp.start("templateCache", "copy", "inject");
};
