var gulp = require('gulp');
var inject = require('gulp-inject');

module.exports = function() {

	var staticFilesList = [
		'./build/css/**/*.css',
        './build/js/lib/angular.js',
		'./build/js/lib/angular.*.js',
		'./build/js/lib/**/*.js',
		'./build/js/frontpress.js',
		'./build/js/frontpress.config.js',
		'./build/js/*.js',
        './build/js/**/*.module.js',
		'./build/js/**/*.run.js',
		'./build/js/**/*.factory.js',
		'./build/js/**/*.directive.js',
		'./build/js/**/*.js',
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


