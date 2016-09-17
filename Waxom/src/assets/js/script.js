(function() {

	$(document).scroll(function() {
		var top = $(document).scrollTop();
		var firstElementHeight = $(window).height();

		if(top >= firstElementHeight - $(".header").height() + 20){
			$(".header").addClass("fixed-menu");
		}
		else{
			$(".header").removeClass("fixed-menu");
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