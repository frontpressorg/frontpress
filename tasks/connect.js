var gulp = require('gulp'),
  connect = require('gulp-connect');

module.exports = function() {
        return gulp.task('connect', function() {
                        connect.server({
                                root : './build/',
                                port : 4000
                        });
                    });
};
