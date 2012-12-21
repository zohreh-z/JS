$(function() {			
				
	$('.top-title').click(function(){
							   
		$('html, body').animate({
			scrollTop: $(".bottom").offset().top
		}, 1000);				   
		 						   
	});
	
	$('.bottom-title').click(function(){
						   
		$('html, body').animate({
			scrollTop: $(".top").offset().top
		}, 1000);				   
	 					   
	});

});