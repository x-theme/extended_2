$(function(){
	$(".template_photo").mouseenter(function(){
		$(this).find('.template_info').show();
	});
	$(".template_photo").mouseleave(function(){
		$(this).find('.template_info').hide();
	});
	
	var float_timeout;
	$(window).scroll(function(e){
	clearTimeout(float_timeout);
		float_timeout = setTimeout(function(){
			var top_scroll = $(this).scrollTop();
			if ( top_scroll >= 180 ) {
				top_scroll = top_scroll - 180;
				$('.call_us_bubble').animate({
					top: top_scroll
				}, 500);
			} else {
			$('.call_us_bubble').animate({
					top: top_scroll - top_scroll
				}, 500);
			}
		}, 300);		
	});
	
	$("li.more-menu").click(function(){
		$(".menu-more-640px").slideToggle();
	});
	
	$(".menu-more-640px").click(function() {
		$(".menu-more-640px").slideToggle();
	});
	
	if( $(window).height() > 888 ) $(".footer-container").addClass("fixed_bottom");
	else $(".footer-container").removeClass("fixed_bottom");
});