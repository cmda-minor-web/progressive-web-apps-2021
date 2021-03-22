const gulp = require('gulp')

return gulp
  .src([
    './public/icons/*.*',
    './public/service-worker.js',
    './public/manifest.json',
  ])
  .pipe(gulp.dest('./dist/'))
