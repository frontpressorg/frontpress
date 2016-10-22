var gulp = require("gulp");
var templateCache = require("gulp-angular-templatecache");

module.exports = function() {
	var templateCacheOptions = {
		templateHeader: "angular.module(\"frontpress.template-cache\", []);\nangular.module(\"frontpress.template-cache\").run([\"$templateCache\", function($templateCache) {"
	};
    return  gulp.task("templateCache", function() {
	  return gulp.src("./src/js/**/*.html")
	    .pipe(templateCache("frontpress.template-cache.js", templateCacheOptions))
	    .pipe(gulp.dest("./src/js"));
    })
}
