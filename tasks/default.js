var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function() {
    var files = [
        'src/js/**/*.js',
        'src/**/*.html',
        'src/styl/**/*.styl'
    ];

    runSequence('copy', 'styl', 'inject', 'connect', 'open');

    gulp.watch(files, ['build']);
};
