'use strict';

var soursePath = './source/'
	, buildPath = './build/'
	, dirs = {
		'source': {
			'vendorJs': soursePath + 'js/vendor/'
			, 'vendorCss': soursePath + 'css/vendor/'
			, 'js': soursePath + 'elements/**/*.js'
			, 'fonts': soursePath + 'fonts/**/*'
			, 'fontsFolder': soursePath + 'fonts/'
			, 'pug': soursePath + 'pages/*.pug'
			, 'pugLayout': soursePath + 'pages/layout/'
			, 'pugJson': soursePath + 'pages/jsons/index.json'
			, 'pug_watch': [soursePath + 'pages/**/*.pug', soursePath + 'pages/**/*.json', soursePath + 'elements/**/*.pug', soursePath + 'elements/**/*.json']
			, 'sass': [soursePath + 'sass/**/*.*', soursePath + 'elements/**/*.sass']
			, 'sassFolder': soursePath + 'sass/'
			, 'img': soursePath + 'img/*.*'
			, 'icons': soursePath + 'img/icons/*.png'
			, 'cssTemplate': soursePath + 'helpers/sprite.template.mustache'
			, 'helpers': soursePath + 'helpers/'
			, 'svgFontsAssets': soursePath + 'svg-font-assets/*.svg'
			, 'favicon': soursePath + 'favicon/**/*.png'
		}
		, 'build': {
			'vendorJs': buildPath + '/js/vendor/'
			, 'vendorCss': buildPath + '/css/vendor/'
			, 'css': buildPath + '/css/'
			, 'js': buildPath + '/js/'
			, 'fonts': buildPath + '/fonts/'
			, 'build': buildPath
			, 'img': buildPath + '/img/'
			, 'favicon': buildPath
		}
	}
	, environment = 'dev';


module.exports = dirs;
module.exports.environment = environment;
module.exports.soursePath = soursePath;
module.exports.buildPath = buildPath;