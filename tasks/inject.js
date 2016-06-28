var gulp = require('gulp');
var inject = require('gulp-inject');

module.exports = function() {

	var staticFilesList = [
		'./build/css/**/*.css',
		'./build/js/lib/external.js',
		'./build/js/app.js',
		'!gulpfile.js',
		'!./tasks/*.js',
	];

	var injectOptions = {
		ignorePath: 'build/'
	};

	return gulp.src('src/index.html')
		.pipe(inject(gulp.src(staticFilesList, {read: true}), injectOptions))
		.pipe(gulp.dest('./build'));
};


