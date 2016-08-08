var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {
	return gulp.task('default', function() {
	    runSequence('ngConfig','copy', 'inject', 'connect', 'open');
	});
};
