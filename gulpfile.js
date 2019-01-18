'use strict'
const gulp = require('gulp')
const minifyHtml = require('gulp-minify-html')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const haml = require('gulp-ruby-haml')

var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

/**
* Paths configuration, easy to change and/or use in multiple tasks
*/
const paths = {
  javascripts: [
    './app/**/*.coffee'
  ],
  templates: [
    './app/**/*.haml',
  ],
  scss: [
  	'./app/**/*.scss'
  ],
  destination: [
  	'./app/dist/'
  ]
}

gulp.task('sass', function (done) {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.destination));
    done()
});

gulp.task('coffeescript', function(done) {
  gulp.src(paths.javascripts)
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest(paths.destination));
  done();
});

/**
* Takes html templates and transform them to angular templates (javascript)
*/
gulp.task('templates', function(done) {
  return gulp.src(paths.templates)
  	.pipe(haml())
   	.pipe(minifyHtml({
        empty: true,
        spare: true,
        quotes: true
    }))
    .pipe(gulp.dest(paths.destination))
    done();
})


/**
* The command `gulp` will resolve in `gulp scripts`
*/
gulp.task('build', gulp.parallel('templates', 'coffeescript', 'sass'));

// an alias.
// gulp.task('default', gulp.parallel('build'));
gulp.task('default', gulp.series('build'), function() {
	console.log("DDD")
})

