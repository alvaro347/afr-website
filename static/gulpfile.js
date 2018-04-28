/*eslint-env node */

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine');
var eslint = require('gulp-eslint');
var exec = require('child_process').exec;
var shell = require('gulp-shell');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');


gulp.task('default', ['styles'], function() {
  // browserSync.init({
  //   server: './'
  // });
  browserSync({
    notify: false,
    proxy: "127.0.0.1:5003"
  });
  gulp.watch('sass/**/*.scss', ['styles']);
  // gulp.watch('js/**/*.js', ['lint']);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
  gulp.watch('js/**/*.jsx').on('change', browserSync.reload);
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("../server/*.py").on('change', browserSync.reload);
});

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});


gulp.task('css', () => {
  gulp.src('./src/css/*.css')
  .pipe(webpackStream(webpackConfig), webpack)
  .pipe(gulp.dest('./dist/css'));
});


// gulp.task('lint', function () {
//   return gulp.src(['js/**/*.js'])
//   // eslint() attaches the lint output to the eslint property
//   // of the file object so it can be used by other modules.
//   .pipe(eslint())
//   // eslint.format() outputs the lint results to the console.
//   // Alternatively use eslint.formatEach() (see Docs).
//   .pipe(eslint.format())
//   // To have the process exit with an error code (1) on
//   // lint error, return the stream and pipe to failOnError last.
//   .pipe(eslint.failOnError());
// });

gulp.task('tests', function () {
  gulp.src('tests/spec/PlayerSpec.js')
  .pipe(jasmine({
    integration: true,
    vendor: 'js/**/*.js'
  }));
});


gulp.task('runserver', function() {
  var proc = exec('python ../server/server.py');
});

gulp.task('flask', shell.task('python ../server/server.py'));
