var gulp = require('gulp');

module.exports = function() {
     return  gulp.task('build', function() {
        gulp.start('copy', 'inject', 'styl');
     })
}
