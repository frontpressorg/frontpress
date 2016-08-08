var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = function() {
	
	return watch('./src/**/*.html', function(){
		gulp.run(['templateCache', 'copy']);
	});
};
