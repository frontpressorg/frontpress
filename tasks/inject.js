var gulp = require("gulp");
var inject = require("gulp-inject");
var argv = process.argv;
var gutil = require('gulp-util');

module.exports = function() {

	var argvToString = argv.join(" ");
	
	var argsToFrontPressFilesMap = {
		"--min": "frontpress.min.js" ,
		"--v1": "frontpress.v1.js" ,
		"--min --v1": "frontpress.v1.min.js"		
	};
	
	var argsToAngularFilesMap = {
		"--min": "angular.min.js"
	};

	function _parseArgsToFilePath(argsToFilesMap, defaultFilePath){
	    var filePath;
	    for(argumentKey in argsToFilesMap){
	    	var argumentKeyList = argumentKey.split(" ");
	        var argumentKeyReversed = argumentKeyList.length == 2 ? [argumentKeyList[1],argumentKeyList[0]].join(" ") : argumentKey;
	        if(argvToString.indexOf(argumentKey) != -1 || argvToString.indexOf(argumentKeyReversed) != -1){
	        	filePath = argsToFilesMap[argumentKey];
	        }
	    }    
	    if(!filePath){
	    	filePath = defaultFilePath;
	    }		
		gutil.log("Injected file on index: " + gutil.colors.magenta("'" +filePath+ "'"));	    
    	return filePath;
	}

	var frontPressFilePath = _parseArgsToFilePath(argsToFrontPressFilesMap, "frontpress.js"); 
	var angularFilePath = _parseArgsToFilePath(argsToAngularFilesMap, "angular.js"); 

    var staticFilesList = [    
        "./build/js/"+angularFilePath,
        "./build/js/release/"+frontPressFilePath,
        "./build/js/dev/frontpress.constant.js",
        "./build/js/dev/sample-blog.js",
	];

	var injectOptions = {
		ignorePath: "build/"
	};

    var injectFiles = gulp.src(staticFilesList, {read: true});

	return gulp.src("src/index.html")
		.pipe(inject(injectFiles, injectOptions))
		.pipe(gulp.dest("./build"));
};
