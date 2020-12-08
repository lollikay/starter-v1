const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const apOptions = {
  cascade: true
};

const sassDevOptions = {
  errLogToConsole: true,
  outputStyle: 'extended'
};

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

const renameOptions = {
  suffix: ".min"
};

exports.devstyles = function styles() {
  return gulp.src('src/assets/styles/**.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(autoprefixer(apOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/assets/css'));
}

exports.styles = function styles() {
  return gulp.src('src/assets/styles/**.scss')
    .pipe(plumber())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(apOptions))
    .pipe(rename(renameOptions))
    .pipe(gulp.dest('build/assets/css'));
}