const gulp = require('gulp');

const { pug2html } = require('./gulp/tasks/pug2html.js');
const { styles, devstyles } = require('./gulp/tasks/styles');
const { scripts } = require('./gulp/tasks/scripts');
const { clean } = require('./gulp/tasks/clean.js');

const build = gulp.series(
                clean,
                gulp.parallel(
                  pug2html, styles, scripts
                )
              );

const dev = function() {
  // gulp.watch('src/assets/styles/*.scss', devstyles);
  // gulp.watch('src/templates/pages/*.pug', pug2html);
  // gulp.watch('src/assets/js/*.pug', scripts);
  gulp.series(
    clean,
    gulp.parallel(
      pug2html, devstyles, scripts
    )
  );
};

exports.dev = dev;
exports.build = build;