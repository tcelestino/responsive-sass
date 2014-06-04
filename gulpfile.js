var gulp    = require("gulp"),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload');

gulp.task('compass', function() {
  return gulp.src('src/scss/**/*.scss')
      .pipe(compass({
        sass: 'src/scss/',
        images: 'assets/images/'
      }))
      .pipe(gulp.dest('assets/css'))
      .pipe(livereload({ auto: false }));
});

gulp.task('watch', function () {
  //livereload.listen();
  gulp.watch('src/scss/**/*.scss', ['compass']);
});

gulp.task('default', ['watch']);