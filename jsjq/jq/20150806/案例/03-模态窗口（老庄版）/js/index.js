
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
	
	
	(function(){
		var bgcolors = ['#040315','#000000','#43a3f9','#030303','#1bcbb7']
		$('.scroll ul li').each(function(index, element) {
			
			$(element).css('background',bgcolors[index])
		});
	
	
		
		var num = 0;
		var timer;
		
		
		/*自动播放功能*/
		function autoplay(){
			num++;
		
			if(num>4){
				num=0
			}
		
			$('.scroll ul').stop().animate({'left':num*-100+'%'},500)
			
			
		}
		timer = setInterval(autoplay,2000)
		
		
		
		/*按钮*/
		$('.scroll .btnright').click(function(e) {
			 autoplay()
		});
		$('.scroll .btnleft').click(function(e) {
		   num--;
		
			if(num<0){
				num=4
			}
		
			$('.scroll ul').stop().animate({'left':num*-100+'%'},500)
			 
		});
		
		
		
		/*鼠标移上关闭定时器*/
		$('.scroll').hover(function(){
			$('.scroll span').stop().fadeIn(500)
			clearInterval(timer)
		},function(){
			$('.scroll span').stop().fadeOut(500)
			timer = setInterval(autoplay,2000)
		})	
	})();
	
	
	
})


