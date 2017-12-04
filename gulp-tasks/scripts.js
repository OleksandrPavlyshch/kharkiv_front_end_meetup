'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, uglify = require('gulp-uglify')
	, gulpif = require('gulp-if')
	, concat = require('gulp-concat')
	, configs = require('./configs')
	, jsFileName = "index.js";

//scripts
gulp.task('scripts', function() {
	return gulp.src(configs.source.js)
	.pipe(plumber())
	.pipe(gulpif(configs.environment !== 'dev', uglify()))
	.pipe(concat(jsFileName))
	.pipe(gulp.dest(configs.build.js));
});