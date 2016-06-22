'use strict';

var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');


// Default usage:
// Open one file with default application

module.exports = function() {
var browser = os.platform() === 'linux' ?
				'google-chrome' : (os.platform() === 'darwin' ?
				'google chrome' : (os.platform() === 'win32' ?
				'chrome' : 'firefox'));

return gulp.task('open', function(){
			gulp.src(__filename)
				.pipe(open({
	    				uri: 'http://localhost:4000/#/',
	    				app: browser
    				}));
		});
}
