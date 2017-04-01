'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const del = require('del');
const jade = require('gulp-jade');
const series = require('gulp-series');
const watch = require('gulp-watch');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', function(){
  return gulp.src('*.less')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(less())
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('build'));
});

gulp.task('jade', function(){
  return gulp.src('*.jade')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(jade())
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('build'));
});
gulp.task('compress', function() {
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/img'))
});

gulp.task('js', function () {
    gulp.src('js/*.js')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest('build'))
});

gulp.task('clean', function() {
    return del('build');
});

gulp.task('build', gulp.series('clean',gulp.parallel('js','compress','styles', 'jade')));

gulp.watch('*.less', gulp.series('styles'));
gulp.watch('*.jade', gulp.series('jade'));
