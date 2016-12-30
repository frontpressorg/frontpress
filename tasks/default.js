"use strict";

var gulp = require("gulp");
var runSequence = require("run-sequence");

module.exports = function() {
	return gulp.task("default", function() {
	    runSequence("pre-commit", "ngConfig", "templateCache", "copy", "inject", "connect", "watch");
	});
};
