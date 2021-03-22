// // const gulp = require('gulp')
// // const concat = require('gulp-concat')

// // return gulp
// //   .src(['./public/js/*.js', './public/js/pages/*.js', './public/js/utils/*.js'])
// //   .pipe(concat('index.js'))
// //   .pipe(gulp.dest('./dist/'))

// const gulp = require('gulp')
// const minifyJS = require('gulp-uglify')
// const concat = require('gulp-concat')

// // './public/js/pages/*.js', './public/js/utils/*.js'
// return gulp
//   .src([
//     './public/js/*.js',
//     './public/js/**/*.js',
//     './public/js/**/**/*.js',
//     './public/js/**/**/**/*.js',
//     './public/js/**/**/**/**/*.js',
//   ])
//   .pipe(minifyJS())
//   .pipe(concat('index.js'))
//   .pipe(gulp.dest('./dist/'))
