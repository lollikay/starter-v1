const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

exports.scripts = function() {
  return gulp.src('src/assets/js/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('build/assets/js'))
}