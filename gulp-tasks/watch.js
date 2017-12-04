'use strict';

var gulp = require('gulp')
	, configs = require('./configs');

gulp.task('watch', function(){
	gulp.watch(configs.source.pug_watch, ['templates']);
	gulp.watch(configs.source.sass, ['sass']);
	gulp.watch(configs.source.js, ['scripts']);
	gulp.watch(configs.source.img, ['images']);
	gulp.watch(configs.source.icons, ['sprite']);
	gulp.watch(configs.source.helpers + '*.*', ['iconfont']);
});
