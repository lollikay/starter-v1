const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const htmlValidator = require('gulp-w3c-html-validator');
const formatHtml = require('gulp-format-html')

function transform() {
  return src('src/templates/pages/*.pug')
          .pipe(plumber())
          .pipe(pug())
          .pipe(htmlValidator({ skipWarnings: true }))
          .pipe(htmlValidator.reporter())
          .pipe(formatHtml())
          .pipe(dest('build/'));
}

exports.pug2html = transform;