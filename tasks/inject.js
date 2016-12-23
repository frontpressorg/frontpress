var gulp = require("gulp");
var inject = require("gulp-inject");
var argv = process.argv;

module.exports = function() {
	var staticFilesList = [
        "./build/js/angular.min.js",
        "./build/js/dev/sample-blog.js",
		"!gulpfile.js",
		"!./tasks/*.js",
	];

    if (argv.indexOf("--production") !== -1) {
        staticFilesList.push("./build/js/main.js")
    } else {
        staticFilesList.push("./build/js/dev/external.js", "./build/js/dev/main.js");
    }

	var injectOptions = {
		ignorePath: "build/"
	};

    var injectFiles = gulp.src(staticFilesList, {read: true});

	return gulp.src("src/index.html")
		.pipe(inject(injectFiles, injectOptions))
		.pipe(gulp.dest("./build"));
};
