(function() {

	$('.menu-list .menu-link').click(function() {
		thisId = $(this).attr('href')
		$.scrollTo(thisId, 1000, {offset: {top: -76}});
		return false;
	});


	$(document).scroll(function() {
		var top = $(document).scrollTop();
		var firstElementHeight = $(window).height();

		if(top > $(".header").height()){
			$(".header").addClass("fixed-menu-style");
		}
		else if( top < 100){
			$(".header").removeClass("fixed-menu-style");
		}

		if(top >= firstElementHeight - 96){
			$(".header").addClass("fixed-menu");
		}
		else{
			$(".header").removeClass("fixed-menu");
		}

	});

	

	$(window).scroll(function() {
		var windowTop = $('body').scrollTop();
		var	countSection = $('.menu-section').length;
		var section = $(".menu-section");

		for(var i = 0; i <= countSection - 1; i++){

			$(".menu-item").eq(i).removeClass("active");

			var prevElement = section.eq(i).offset().top;
			var	nextElement = section.eq(i).next().offset().top;
			var	menuHeight = 96;

			console.log(section.eq(i).next().offset().top);

			if(windowTop >= prevElement - menuHeight - 1 && windowTop <= nextElement){
				$(".menu-item").removeClass("active");
				$(".menu-item").eq(i).addClass("active");
			}

		}
	});

	$("#post-carousel").owlCarousel({
		items:3,
		nav: true,
		navText: ['',''],
		autoplay: true,
		loop:true,
		responsive: {
			0: {
				items:1
			},
			767: {
				items: 2
			},
			992: {
				items: 3
			}
		} 
	});

	$("#slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<img src="img/arrow-left-main-slider.png" alt="arrow">','<img src="img/arrow-right-main-slider.png" alt="arrow">'],
		autoplay: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				nav: false
			},
			767: {
				nav: true
			}
		} 
	});

	$(".posts-item-carousel").owlCarousel({
		items: 1,
		mouseDrag: false,
		loop:true
	});
	
	$("#mix-container").mixItUp();

	$(".tada-animated").mouseover(
		function() {
			$(this).addClass('animated tada');
		}
	);

	$(".tada-animated").on("animationend", function() {
		$(this).removeClass('tada');
	})

	$(".bounce-animated").click(
		function() {
			$(this).addClass('animated bounce');
		}
	);

	$(".bounce-animated").on("animationend", function() {
		$(this).removeClass('bounce');
	});

	$(document).scroll(function() {
		var top = $(document).scrollTop();
		var countSection = $(".counters").offset().top;
		if(top + $(window).height() / 2 >= countSection){
			counter();
		}
	});

	function counter() {
		
		$('.counter').each(function() {
		  var $this = $(this),
		      countTo = $this.attr('data-count');
		  
		  $({ countNum: $this.text()}).animate({
		    countNum: countTo
		  },

		  {

		    duration: 2500,
		    easing:'linear',
		    step: function() {
		      $this.text(Math.floor(this.countNum));
		    },
		    complete: function() {
		      $this.text(this.countNum);
		    }

		  });  
		  
		});
	}

	


}());