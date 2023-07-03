(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on( "load", function() {
	   $(".preloader").fadeOut(600);
    });
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* Top Menu */
	$(document).on('click','.navbar-nav li a, #responsive-menu ul li a',function(){
		if($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 74
			}, 800);
			return false;
		}
	});
	
	/* Brand slider */
	var swiper = new Swiper('.brand-slider', {
		autoplay: {
		  delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 5,
		spaceBetween: 5,
		breakpoints: {
		  // Change slidesPerView for screens larger than or equal to 991px
		  991: {
			slidesPerView: 3,
		  },
		  // Change slidesPerView for screens smaller than 576px
		  576: {
			slidesPerView: 3,
		  }
		}
	  });
	  
	  // Update the swiper when the window is resized
	  window.addEventListener('resize', function() {
		swiper.update();
	  });
	  
	  // Disable swiper on document click
	  document.addEventListener('click', function() {
		swiper.allowSlideNext = false;
		swiper.allowSlidePrev = false;
	  });

	/* Experience slider */
	var swiper = new Swiper('.experience-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.experience-pagination',
			type: 'bullets',
			clickable: true,
		},
    });
	
	/* Education slider */
	var swiper = new Swiper('.education-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.education-pagination',
			type: 'bullets',
			clickable: true,
		},
    });
	
	/* Testimonial slider */
	var swiper = new Swiper('.testimonial-slider',{
		autoplay: {
			delay: 4000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: true,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		}
    });

	// Get the controls btn
	var controlsButton = document.querySelector("#controls");


	controlsButton.addEventListener("click", function() {
	// Get the swiper instance
	var swiper = document.querySelector(".testimonial-slider").swiper;

	// Check if the swiper is autoplaying
	if (swiper.autoplay.running) {
		swiper.autoplay.stop();
		controlsButton.className = "bi bi-play-circle";
	  } else {
		// If it's not autoplaying, start the swiper and change the button icon to "pause"
		swiper.autoplay.start();
		controlsButton.className = "bi bi-pause-circle";
	  }
	});
	
	/* Partner slider */
	var swiper = new Swiper('.partner-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 1
			},
			
			991: {
				slidesPerView: 3
			}
		}
    });
	
	/*Portfolio (filtering) */
	/* Init Isotope */
	var $portfolio = $(".portfolio-boxes").isotope({
		itemSelector: ".portfolio-box",
		layoutMode: "masonry"
	});

	/* Set initial filtering */
	$window.load(function(){
		$portfolio.isotope({ filter: "*" });
	});

	/* Filter items on click */
	var $portfolionav=$(".portfolio-nav li a");
		$portfolionav.on('click', function (e) { 
	
		var filterValue = $(this).attr('data-filter');
		$portfolio.isotope({
			filter: filterValue
		}); 
		
		$portfolionav.removeClass("active-portfolio"); 
		$(this).addClass("active-portfolio");
		e.preventDefault();
	}); 
	
	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});
	
	
	/* Popup video */
	var $popupvideo = $(".popup-video"); 
	if($popupvideo.length){
		$popupvideo.magnificPopup({
			type: 'iframe',
			preloader: true,
		});
	}
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 10, time: 1000 });
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 

	// Change banner images TODO: Is not sync
	// var baseImageUrl = './images/';

	// var backgrounds = [
	// baseImageUrl + 'orion.jpg',
	// baseImageUrl + 'carina.jpg',
	// baseImageUrl + 'lagoon.jpg',
	// baseImageUrl + 'orion2.jpg',
	// baseImageUrl + 'astronomy.jpg'
	// ];

	// var banner = document.getElementById('home');
	// var currentIndex = 0;

	// banner.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
	// banner.style.backgroundPosition = 'top right';
	// banner.style.backgroundRepeat = 'no-repeat';
	// banner.style.backgroundSize = 'cover';
	// banner.style.animation = 'fadeBackground 18s infinite';

	// // Define CSS keyframes
	// var keyframes = `@keyframes fadeBackground {
	// 0% { opacity: 1; }  /* Start with opacity 1 */
	// 10% { opacity: 1; }
	// 90% { opacity: 1; }
	// 95% { opacity: 0; } /* Fade out the image at 95% */
	// 100% { opacity: 0; }
	// }`;

	// // Create a style element and append keyframes
	// var style = document.createElement('style');
	// style.innerHTML = keyframes;
	// document.head.appendChild(style);

	// function changeBackground() {
	// currentIndex++;

	// if (currentIndex >= backgrounds.length) {
	// 	currentIndex = 0;
	// }

	// banner.style.backgroundImage = 'url(' + backgrounds[currentIndex] + ')';
	// }

	// setTimeout(changeBackground, 20000);  
	// setInterval(changeBackground, 20000);  
	
})(jQuery);