'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, postcss = require('gulp-postcss')
	, sass = require('gulp-sass')
	, sassGlob = require('gulp-sass-glob')
	, autoprefixer = require('autoprefixer')
	, mqpacker = require("css-mqpacker")
	, sourcemaps = require('gulp-sourcemaps')
	, gulpif = require('gulp-if')
	, configs = require('./configs');

//sass
gulp.task('sass', function () {

	var processors = [
		autoprefixer({browsers: ['last 2 version', 'Android 4'], cascade: false})
		// ,mqpacker({
		// 	sort: function (a, b) {
		// 		a = a.replace(/\D/g,'');
		// 		b = b.replace(/\D/g,'');
		// 		return b-a;
		// 	}
		// })
	];


	return gulp.src(configs.source.sass)
		.pipe(plumber())
		.pipe(gulpif(configs.environment === 'dev', sourcemaps.init()))
		.pipe(sassGlob())
		.pipe(
			gulpif(
				configs.environment === 'dev',
				sass({outputStyle: 'compact'}).on('error', sass.logError),
				sass({outputStyle: 'compressed'}).on('error', sass.logError)
				)
			)
		.pipe(postcss(processors))
		.pipe(gulpif(configs.environment === 'dev', sourcemaps.write()))
		.pipe(gulp.dest(configs.build.css));
});
