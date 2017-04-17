
$(function(){
	//$('.dark').fadeTo(0,0.5)	
	
	(function(){
		$('.loginmmd').click(function(e) {
			$('.dark').fadeTo(400,0.5)	
			$('.loginbox').fadeIn(400)
		});
		
		$('.loginbox span').click(function(e) {
			$('.dark,.loginbox').fadeOut(400)
		});	
	})();
	
	(function(){
		var bl = 0
		$('.qqask span').click(function(e) {
			
			if(bl == 0){
				$('.qqask').animate({'right':0},350)
				$(this).css('background','url(images/img/qqLOpen.jpg)')	
				bl=1
			}else{
				$('.qqask').animate({'right':-131},350)
				$(this).css('background','url(images/img/qqL.jpg)')	
				bl=0
			}
			
		});	
	})();
	
	
	
	
})


