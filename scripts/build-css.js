const gulp = require('gulp');
const concat = require('gulp-concat');
const cleancss = require('gulp-clean-css');

return gulp.src([
    "./src/css/*.css"
])
.pipe(cleancss({ compatibility: "ie8" }))
  .pipe(concat("index.css"))
  .pipe(gulp.dest("./public/css"));
