'use strict';

var gulp = require('gulp')
	, configs = require('./configs')
	, runSequence = require('run-sequence');


gulp.task('setProdEnv', function () {
	configs.environment = "prod";
		}
	);

gulp.task('build', function () {
	runSequence(['iconfont', 'favicons', 'fonts', 'scripts', /*'sprite',*/ 'images'], 'sass','templates');
});
