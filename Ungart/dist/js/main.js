window.onload = function() {

	$("#menu-bars").click(function() {
		if($(".menu").css("display") == "none"){
			$(".menu").addClass("active");
			$("#menu-bars").removeClass('fa-bars');
			$("#menu-bars").addClass('fa-close');
		}
		else{
			$(".menu").removeClass("active");
			$("#menu-bars").removeClass('fa-close');
			$("#menu-bars").addClass('fa-bars');
		}
	});

	$(".portfolio-bars").click(function() {
		if($(".portfolio-categories-list").css("display") == "none"){
			$(".portfolio-categories-list").slideDown();
			$(".portfolio-bars").removeClass('fa-bars');
			$(".portfolio-bars").addClass('fa-close');
		}
		else{
			$(".portfolio-categories-list").slideUp();
			$(".portfolio-bars").removeClass('fa-close');
			$(".portfolio-bars").addClass('fa-bars');
		}
	});

	$(".portfolio-categories-item").click(function() {
		var text = $(this).text();
		$(".portfolio-active-category").text(text);
	});

	$('.menu .menu-link').click(function(){
    var idscroll = $(this).attr('href');
    $.scrollTo(idscroll, 1000, { offset: {top: -79} });
    return false;
  });

  $(window).scroll(function() {
  	var windowTop = $('body').scrollTop();
  	for( var i = 0; i < $('section').length; i++){
  		$('.menu-link').eq(i).removeClass('active');
  		var prevElement = $('section').eq(i).offset().top;
  		var nextElement = $('section').eq(i).next().offset().top;
  		var menuHeight = $('.menu').height();
  		if(windowTop >= prevElement - menuHeight && windowTop <= nextElement){
	  		$('.menu-link').removeClass('active');
	  		$('.menu-link').eq(i - 1).addClass('active');
  		}
  	}
  });

  $("#mix-container").mixItUp();


}