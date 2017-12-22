'use strict';
(function () {
	var $preloader = $('.preloader');

	//fade-preloader
	$(window).on("load", function () {
		$preloader.delay(1500).fadeOut(1500, function(){
			new WOW().init();
		});
	});

})();