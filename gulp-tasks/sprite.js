'use strict';

var gulp = require('gulp')
	, plumber = require('gulp-plumber')
	, spritesmith = require('gulp.spritesmith')
	, configs = require('./configs');

// sprite
gulp.task('sprite', function() {
	var spriteData = gulp.src(configs.source.icons)
	.pipe(plumber())
	.pipe(spritesmith({
		imgName: 'icons.png'
		, cssName: '_sprite.sass'
		, imgPath: '../img/icons.png'
		, cssFormat: 'sass'
		, padding: 4
		, cssTemplate: configs.source.cssTemplate
	}));
	spriteData.img
		.pipe(gulp.dest(configs.build.img));
	spriteData.css
		.pipe(gulp.dest(configs.source.sassFolder));
});