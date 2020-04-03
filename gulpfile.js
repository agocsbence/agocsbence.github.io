const gulp = require('gulp'),
      sass = require('gulp-sass'),
      imagemin = require('gulp-imagemin');
var responsive = require('gulp-responsive-images');

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

// gulp.task('srcset', function(){
//   return gulp.src('./assets/src/img/belga.png}')
//     .pipe(
//       responsive({
//         'belga.png': [{
//           width: 300,
//           rename: { suffix: '-300' }
//         }, {
//           width: 350,
//           rename: { suffix: '-350' }
//         }, {
//           width: 700,
//           rename: { suffix: '-700' }
//         }]
//     }))
//     .pipe(gulp.dest('./assets/src/img/thumbnails'))
// });

gulp.task('imagemin', async function () {
  gulp.src('./assets/src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/dist/img'))
});

gulp.task('fonts', function() {
  return gulp.src('assets/src/scss/fonts/*.ttf')
    .pipe(gulp.dest('assets/dist/css/fonts/'));
});

gulp.task('default', gulp.series('imagemin', 'fonts', 'sass', 'sass:watch'));