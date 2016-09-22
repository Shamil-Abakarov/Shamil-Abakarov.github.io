

window.onload = function() {

	$('.spinner').addClass('active');

	setTimeout(function() {
		var $preloader = $('#page-preloader'),
      $spinner   = $preloader.find('.spinner');
	  $spinner.fadeOut();
	  $preloader.delay(250).fadeOut('slow');
	}, 2000)
	

	var nav = $('#menu-nav'),
			navTop = nav.offset().top;


	$(window).on('scroll', function animateSection() {

		var body = $(document),
		documentTop = body.scrollTop();

		if( documentTop >= navTop ){
			nav.addClass("fixed");
			$(".menu-block-fixed").show();
		}
		else{
			nav.removeClass("fixed");
			$(".menu-block-fixed").hide();
		}


	});

	$('.arrow-down').click(function(){
	    var idscroll = $(this).attr('href');
	    $.scrollTo(idscroll, 1000, { offset: {top: -62} });
	    return false;
	  });

	$('nav .menu-link').click(function(){
	    var idscroll = $(this).attr('href');
	    $.scrollTo(idscroll, 1000, { offset: {top: -62} });
	    return false;
	  });

	$(".menu-bars").click(function() {
		if($(".menu-bars").find("span").hasClass("active")){
			$(".menu-bars").find("span").removeClass("close");
			$(".menu-list").removeClass('active');
			setTimeout(function() {
				$(".menu-bars").find("span").removeClass("active");
			}, 400);
		}
		else{
			$(".menu-bars").find("span").addClass("active");
			$(".menu-list").addClass('active');
			setTimeout(function() {
				$(".menu-bars").find("span").addClass("close");
			}, 400);
		}
	});

	  $(window).scroll(function() {
	  	var windowTop = $('body').scrollTop();
	  	for( var i = 0; i < $('.section').length; i++){
	  		$('.menu-link').eq(i).removeClass('active');
	  		var prevElement = $('.section').eq(i).offset().top;
	  		var nextElement = $('.section').eq(i).next().offset().top;
	  		var menuHeight = $('.menu-nav').height();
	  		if(windowTop >= prevElement - menuHeight - 1 && windowTop <= nextElement){
		  		$('.menu-link').removeClass('active');
		  		$('.menu-link').eq(i).addClass('active');
	  		}
	  	}
	  });

}