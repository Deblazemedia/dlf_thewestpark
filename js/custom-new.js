$(document).ready(function() {
    $("#scroll").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = $(this.hash);
            if ((o = o.length && o || $("[name=" + this.hash.slice(1) + "]")).length) {
                var e = o.offset().top - 180;
                return $("html,body").animate({
                    scrollTop: e
                }, 1e3), !1
            }
        }


    }),

    $(".navbar-light .navbar-nav .nav-link").click(function() {
        $(".navbar-collapse").removeClass("show")
    }),

        $('.navbar-light .navbar-nav .nav-link').click(function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');


    }),
    $('.enq-click').click(function(){
        $('.banner_form').slideToggle();
    })


    $("#fullpage").fullpage({
        anchors: ["1", "2", "3", "4", "5", "6", "7", "8","9", "10"],
        lockAnchors: false,
        navigation: !0,
        sectionSelector: ".vertical-scrolling",
        navigationPosition: "right",
        navigationTooltips: ["First page", "Second page", "Third and last page"],
        responsiveWidth: 991,
        afterResponsive: function(o) {},
    }),



    $(".floorPlan").slick({
        dots: !0,
        infinite: false,
        autoplay: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: !1,
        prevArrow: !1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),

		$(".Specificationjs").slick({
        dots: !0,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
        nextArrow: !1,
        prevArrow: !1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })


    $(".floorPlan a").fancybox();
     $(".site-map a").fancybox();
     $(".blueBg a").fancybox();


    // SLIDER
	var swiper = new Swiper('.home-container', {
		touchRatio: 0,
		loop: false,
		speed: 1500,
        pagination: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
      	},
      	pagination: {
			el: '.pagination',
			type: 'fraction',
      	},
      	navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
      	},
    });


	/* GALLERY SLIDER */
	var swiper = new Swiper('.gallery-container', {
	  	spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
      	},
      	pagination: {
			el: '.gallery-pagination',
			clickable: true,
      },
    });


	// Floor Images
	var swiper = new Swiper('.floor-container', {
		touchRatio: 0,
		loop: true,
		speed: 600,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
      	},
      	pagination: {
			el: '.pagination',
			type: 'fraction',
      	},
      	navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
      	},
    });

	// Floor Images
	var swiper = new Swiper('.floor-container1', {
		touchRatio: 0,
		loop: true,
		speed: 600,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
      	},
      	pagination: {
			el: '.pagination',
			type: 'fraction',
      	},
      	navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
      	},
    });

	// Floor Images
	var swiper = new Swiper('.gallery-container', {
		touchRatio: 0,
		loop: true,
		speed: 600,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
      	},
      	pagination: {
			el: '.pagination',
			type: 'fraction',
      	},
      	navigation: {
			nextEl: '.button-next',
			prevEl: '.button-prev',
      	},
    });

	// Floor Images
//	var swiper = new Swiper('.plans-container', {
//		touchRatio: 0,
//		loop: true,
//		speed: 600,
//		autoplay: false,
//      	pagination: {
//			el: '.pagination',
//			type: 'fraction',
//      	},
//      	navigation: {
//			nextEl: '.button-next',
//			prevEl: '.button-prev',
//      	},
//    });


	// Gallery Images - mobile
//	var swiper = new Swiper('.gallery-container2', {
//        slidesPerView: 2,
//        spaceBetween: 20,
//		speed: 600,
//        loop: true,
//        autoplay: {
//			delay: 3000,
//			disableOnInteraction: false,
//      	},
//      	pagination: {
//			el: '.pagination',
//			type: 'fraction',
//      	},
//      	navigation: {
//			nextEl: '.button-next',
//			prevEl: '.button-prev',
//      	},
//		breakpoints: {
//		767: {
//		  slidesPerView: 1
//		}
//	  }
//});


	$('.plans-container .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	dots:false,
    nav:true,
	navText: [
        'Prev',
        'Next'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



$('.floor_plans.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
	dots:true,
    nav:false,
    autoplayTimeout: 7000,
    smartSpeed: 800, 
	navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
});

	$('.gallery-container2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	dots:false,
    nav:true,
	navText: [
        'Prev',
        'Next'
    ],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:2,
            loop:false
        }
    }
});





});