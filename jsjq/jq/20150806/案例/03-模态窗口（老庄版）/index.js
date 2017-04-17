
$(function(){
	//$('.dark').fadeTo(0,0.5)	
	
	$('.loginmmd').click(function(e) {
		$('.dark').fadeTo(400,0.5)	
        $('.loginbox').fadeIn(400)
    });
	
	$('.loginbox span').click(function(e) {
        $('.dark,.loginbox').fadeOut(400)
    });
})


