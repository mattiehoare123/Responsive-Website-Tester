const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// Copy ALL HMTL files
gulp.task('copyHtml', async function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
})

// Minify JS
gulp.task('minify', async function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', async function() {
  gulp.src('src/scss/**/*.scss')
    // If we get any this will show it
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', function() {
  gulp.watch('src/*.html', gulp.series('copyHtml'));
  gulp.watch('src/js/*.js', gulp.series('minify'));
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
})

gulp.task('default', gulp.series(['copyHtml', 'minify', 'sass', 'watch']));
