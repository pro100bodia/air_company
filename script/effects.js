$(window).on('load', function(){
	$('#load').delay(500).fadeOut('slow');
});

/*fading after scroll*/

$(document).ready(function(){
	$('.text').hide();
	$(window).scroll(function(){
		var pos = $(window).scrollTop(),
			blockHeight = parseInt( $('.block').css('height') ),
			headerHeight = parseInt( $('header').css('height') );
			
		if( pos >= (1 *  blockHeight - headerHeight) ){
			if( $(window).width() <= 770 ){
				$('.two .trigger').css('width', '140px');
			}
			else{
				$('.two .trigger').css('width', '170px');
			}
			$('.two .trigger span').css('display', 'inline');
			$('.two .trigger h2').css('display', 'block');
			
			setTriggerWidth('.two');
		}
		if( pos >= (2 *  blockHeight - headerHeight) ){
			$('.ch').css('margin', 'auto');
		}
		if( pos >= (3 *  blockHeight - headerHeight) ){
			$('.text').show();
			if( $(window).width() <= 980 ){
				$('.coment img').css({'width': '120px', 'height': '120px'});
				$('.text').css('width', '250px');
			}
			if( $(window).width() <= 830 ){
				$('.coment img').css({'width': '100px', 'height': '100px'});
				//$('.text').css('width', '206px');
			}else{
				$('.coment img').css({'width': '146px', 'height': '146px'});
				$('.text').css('width', '286px');
			}
			$('.im').css('opacity', '1');
		}
		if( pos >= (4 *  blockHeight - headerHeight) ){
			if( $(window).width() <= 770 ){
				$('.five .trigger').css('width', '140px');
			}
			if( $(window).width() <= 570 ){
				$('.five .trigger').css('width', '100%');
			}else{
				$('.five .trigger').css('width', '170px');
			}
			$('.five .trigger span').css('display', 'inline');
			
			setTriggerWidth('.five');
		}
		
	});
});