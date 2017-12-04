'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, imagemin = require('gulp-imagemin')
	, pngquant = require('imagemin-pngquant')
	, gulpif = require('gulp-if')
	, configs = require('./configs');

//images
gulp.task('images', function() {
	return gulp.src(configs.source.img)
		.pipe(plumber())
		.pipe(gulpif(/[.](png|jpeg|jpg|svg)$/, imagemin({
			progressive: true
			, svgoPlugins: [{
				removeViewBox: false
			}]
			, use: [pngquant()]
		})))
		.pipe(gulp.dest(configs.build.img));
});