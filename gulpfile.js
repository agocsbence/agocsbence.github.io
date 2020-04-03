const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        imagemin = require('gulp-imagemin');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/src/scss/**/*.scss', gulp.series('sass'));
  console.log('gulp is watching for SCSS changes 👀');
});

gulp.task('imagemin', async function () {
  gulp.src('assets/src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/dist/img'))
});

gulp.task('fonts', function() {
  return gulp.src('assets/src/scss/fonts/')
    .pipe(gulp.dest('assets/dist/css/fonts/'));
});

gulp.task('default', gulp.series('imagemin', 'fonts', 'sass', 'sass:watch'));