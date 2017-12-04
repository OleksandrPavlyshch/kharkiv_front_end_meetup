'use strict';
var gulp = require('gulp')
	, pug = require('gulp-pug')
	, plumber = require('gulp-plumber')
	, fs = require('fs')
	, configs = require('./configs');


gulp.task('templates', function () {
	var pugJson = JSON.parse( fs.readFileSync(configs.source.pugJson, { encoding: 'utf8' }));

	return gulp.src(configs.source.pug)
	.pipe(plumber())
	.pipe(pug({
		pretty: configs.environment === 'dev'
		, locals: pugJson
	}))
	.pipe(gulp.dest(configs.buildPath));
});