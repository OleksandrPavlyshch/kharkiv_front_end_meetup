'use strict';

(function() {

	let $body = $('body')
		, scrollClass = "is-scroll"
		, $menuButton = $('.toggle-menu-button')
		, menuShowClass = 'is-menu-show'
		, menuClass = '.toggle-menu-button';


	let scrollWatch = function() {

		if (window.pageYOffset > window.innerHeight / 6) {
			$body.addClass(scrollClass);
		}

		window.addEventListener('scroll', function() {
			let scrolled = window.pageYOffset || document.documentElement.scrollTop;
			if (scrolled > 30) {
				$body.addClass(scrollClass);
				return;
			}
			$body.removeClass(scrollClass);
		});

	};

	//init scrollWatch
	scrollWatch();


	//init scroll spy
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


	//init scroll links
	let $scrollLinks = $('.scroll-link');

	$scrollLinks.on('click', function(event) {
		event.preventDefault();
		let $this = $(this)
			, idMark = $this.attr('href')
			, scrollVal = (idMark == "intro") ? 0 : $(idMark).offset().top;
		window.scroll({ top: scrollVal, left: 0, behavior: 'smooth' });
	});

	//init menu open
	$menuButton.on('click', function() {
		$body.toggleClass(menuShowClass);
	});


	$(document).click( function(event){
		if( $(event.target).closest(menuClass).length )
			return;
		$body.removeClass(menuShowClass);
	});

})();