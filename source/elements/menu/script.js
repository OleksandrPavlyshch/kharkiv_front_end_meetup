'use strict';

(function() {

	let $body = $('body'),
		scrollClass = "is-scroll";


	let scrollWatch = function() {

		if (window.pageYOffset > window.innerHeight / 2) {
			$body.addClass(scrollClass);
		}

		window.addEventListener('scroll', function() {
			let scrolled = window.pageYOffset || document.documentElement.scrollTop;
			if (scrolled > window.innerHeight / 2) {
				$body.addClass(scrollClass);
				return;
			}
			$body.removeClass(scrollClass);
		});

	};

	//init
	scrollWatch();

	let section = document.querySelectorAll(".scroll-spy");
	let sections = {};
	let i = 0;

	Array.prototype.forEach.call(section, function(e) {
		sections[e.id] = e.offsetTop;
	});

	window.onscroll = function() {
		let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		let $scrollSpyLinks = $('.scroll_spy_link');
		let currentSection;
		for (i in sections) {
			if (sections[i] <= scrollPosition) {
				currentSection = i;
				$scrollSpyLinks.removeClass('active');
				$scrollSpyLinks.filter('[href="#' + currentSection + '"]').addClass('active');
			}
		}
	};

	let $scrollLinks = $('.scroll-link');

	$scrollLinks.on('click', function(event) {
		event.preventDefault();
		let $this = $(this)
			, idMark = $this.attr('href')
			, scrollVal = (idMark == "intro") ? 0 : $(idMark).offset().top;
			console.log(scrollVal);
		window.scroll({ top: scrollVal, left: 0, behavior: 'smooth' });
	});
})();