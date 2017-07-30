var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCSS = require('gulp-css');

gulp.task('css', function(){
  return gulp.src('static/styles/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/build/styles'))
});

gulp.task('watch', function() {
  gulp.watch('static/styles/*.less', ['css']);
});

gulp.task('default', ['watch']);