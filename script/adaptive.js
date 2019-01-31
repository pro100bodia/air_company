function setHeight(){
	$('.block').css({
    height: $(window).height() + 'px'
    });
	
	$('.ghost').css('height', $('header').height() + 'px');
	$('.byi').css('height', $('header').height() + 'px');
}

setHeight();
$(window).resize( setHeight );

function setTriggerWidth(){
	if( $(window).width() <= 570 ){
		$('.trigger').css('width', parseInt( $('.triggers-area').css('width') ) / 2 + 'px');
	}
}

$(window).resize( setTriggerWidth );

function setCentralMargin(){
	if($(window).width <= 770){
		var width = $('.three h1+.central-square').css('margin-top');
		console.log( width );
		width += 20;
		$('.three h1+.central-square').css('margin-top', width+'px');
	}
}
setCentralMargin();
$(window).resize( setCentralMargin );

