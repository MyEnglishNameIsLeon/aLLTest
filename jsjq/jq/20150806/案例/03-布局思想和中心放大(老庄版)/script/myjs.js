// JavaScript Document
$(function(){

	$('.Myul li').each(function(index, element) {
        
		
		//$(element).html($(element).position().left+','+$(element).position().top)
		
		$(element).css({'left':$(element).position().left,'top':$(element).position().top})
    });
	
	$('.Myul li').css({'position':'absolute'})
	
	//$('.Myul li:first').css({'width':200,'background':'#fcf'})
	
	
	var myzindex = 1;
	
	$('.Myul li').mouseenter(function(e) {
		
		myzindex++;
		$(this).css('z-index',myzindex)
        $(this).stop().animate({'width':230,'height':230,'margin-left':-40,'margin-top':-40})
    }).mouseleave(function(e) {
         $(this).stop().animate({'width':148,'height':148,'margin-left':0,'margin-top':0})
    });	
	

})