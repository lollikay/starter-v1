const del = require('del')

exports.clean = function clean(cb) {
  return del('build').then(() => {
    cb();
  })
}