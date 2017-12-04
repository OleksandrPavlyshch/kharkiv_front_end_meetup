"use strict";
var gulp = require('gulp')
	, mainBowerFiles = require('main-bower-files')
	, plumber = require('gulp-plumber')
	, uglify = require('gulp-uglify')
	, bower = require('gulp-bower')
	, runSequence = require('run-sequence')
	, cleanCSS = require('gulp-clean-css')
	, wiredep = require('wiredep').stream
	, configs = require('./configs');

gulp.task('bower', function() {
	runSequence('install-bower-packeges', 'vendor-js', 'vendor-css', 'wiredep');
});

// install bower packeges
gulp.task('install-bower-packeges', function() {
	return bower();

});

//add gulp dependency ot html
gulp.task('wiredep', function () {
	gulp.src(configs.source.pugLayout + '*.pug')
		.pipe(wiredep({
			devDependencies: true
			, fileTypes: {
				pug: {
					block: /(([ \t]*)\/\/-?\s*bower:*(\S*))(\n|\r|.)*?(\/\/-?\s*endbower)/gi
					, detect: {
						js: /script\(.*src=['"]([^'"]+)/gi
						, css: /link\(.*href=['"]([^'"]+)/gi
					}
					, replace: {
						js: function(filePath){
								var pathArray = filePath.split('/')
									, fileName = pathArray[pathArray.length - 1];
								return 'script(src="/js/vendor/' + fileName + '")';
							}
						, css: function(filePath){
								var pathArray = filePath.split('/')
									, fileName = pathArray[pathArray.length - 1];
								return 'link(rel=\'stylesheet\', href="css/vendor/' + fileName + '")';
							}
					}
				}
			}
		}))
		.pipe(gulp.dest(configs.source.pugLayout));
});

// vendor-js
gulp.task('vendor-js', function() {
	return gulp.src(mainBowerFiles('**/*.js'))
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest(configs.build.vendorJs));
});

// vendor-js
gulp.task('vendor-css', function() {
	return gulp.src(mainBowerFiles('**/*.css'))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest(configs.build.vendorCss));
});