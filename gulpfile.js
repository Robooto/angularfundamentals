var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['test']);
});

gulp.task('copy', ['clean'], function () {
    gulp.src('./config/*.js')
        .pipe(gulp.dest('./test/'));
});


gulp.task('watch', function() {
    gulp.watch('./config/*.js', ['copy']);
});