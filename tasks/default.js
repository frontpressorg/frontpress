var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {


	return gulp.task('default', function (done) {
	    gulp.start('init')
	        .on('end', function () { 	  			
	    		console.log('oiii');
	    		runSequence('ngConfig','copy', 'inject', 'connect', 'open');
	    		done();
	    });
	});

	

    // var files = [
    //     'src/js/**/*.js',
    //     'src/**/*.html',
    //     'src/styl/**/*.styl'
    // ];

    // runSequence();

    // gulp.watch(files, ['build']);
};
