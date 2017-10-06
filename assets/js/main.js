(function($) {
	"use strict";

	jQuery(document).ready(function($){
		$(".homepage-slides").owlCarousel({
            items:1,
        	nav:false,
        	dots:true,
        	loop:true,
        	autoplay:true
		});
		$(".logo-carousel").owlCarousel({
			items:5,
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true
        });
		
	});

	jQuery(window).load(function($){

	});
})(jQuery);