const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

module.exports = function script() {
  return gulp.src('src/assets/js/main.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/env']}))
    .pipe('tercer')
    .pipe(sourcemaps.write())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('build/assets/js'))
}