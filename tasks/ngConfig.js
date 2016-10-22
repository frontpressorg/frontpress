var gulp = require("gulp");
var gulpNgConfig = require("gulp-ng-config");
var fs = require("fs");
var b2v = require("buffer-to-vinyl");

module.exports = function() {
	var json = JSON.parse(fs.readFileSync("./frontpress.json"));
	var configs = new Object;
	configs.FrontpressConfigurationFile = json;
	configs = JSON.stringify(configs);

	var jsFileTemplateWrapper = "// file generated using ngConfig\n\n<%= module %>";

	var ngConfigOptions = {
		pretty: 4,
		wrap: jsFileTemplateWrapper,
		createModule: false,
		type: "constant"
	};

	var task = gulp.task("ngConfig", function () {
		b2v.stream(new Buffer(configs), "frontpress.constant.js")
    		.pipe(gulpNgConfig("frontpress.components.frontpress-provider",ngConfigOptions))
    		.pipe(gulp.dest("./src/js/components/frontpress-provider/constants/"))
	});

	return task;
}
