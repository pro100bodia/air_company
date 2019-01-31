/* performance */
jQuery.fn.extend({
    disable: function(state) {
        return this.each(function() {
            this.disabled = state;
        });
    }
});

$('.step span').hide();  //hiding warning statements
$('.pads-area input').hide();  //hiding submit button
$('.dropdown').hide(); //hiding both pas and cargo blocks

var count = 1, marge = 0, elem, inputNumber, inputCount;
$('.kid span').text(count);  //display the step

$('.right').click(function(){ check(1) });
$('.left').click(function(){ check(-1) });


function check(side){
	inputCount = 0;
	
	elem = '#step-' + count + ' input,#step-' + count + ' select';
	$(elem).each(function(){
		if($(this).val().length === 0 && side === 1){
			$(this).next('span').show();
			$(this).change(function(){
				$(this).next('span').hide();
				inputCount++;
			});
		}else{
			$(this).next('span').hide();
			inputCount++;
		}
	});
	inputNumber = $('#step-' + count + ' input').length + 
					  $('#step-' + count + ' select').length;
					  
	if( inputNumber == inputCount ){
		swipe(side, inputNumber, inputCount);
	}
}

function swipe(side, inputNumber, inputCount){
	count += side;
	$('.kid span').text(count);
	
	(count > 1) ? $('.left').disable(false) : $('.left').disable(true);
	if(count > 2){
		$('.right').disable(true);
		//showing submit button and choosen type
		$('#t-option').click(function(){ 
			$('.pas').show();
			$('.cargo').hide();
			
			elem = '.pas select,.pas input';
			checkLastStep( elem );
		});

		$('#s-option').click(function(){ 
			$('.pas').hide();
			$('.cargo').show();
			
			elem = ' .cargo input';
			checkLastStep( elem );
		});
	}else{
		$('.right').disable(false);
	}
	
	marge = parseInt( $('.inside').css('margin-left') );
	$('.inside').css('margin-left', marge - 385 * side + 'px');
}

function checkLastStep( elem ){
	inputCount = 0;
	inputNumber = $( elem ).length;
	
	
	$( elem ).each(function(){
		if($(this).val().length !== 0){
			inputCount++;
			$(this).next('span').hide();
		}else{
			//$(this).next('span').show();
		}
		
		$( this ).change(function(){ checkLastStep( elem ) });
	});
	
	if(inputNumber === inputCount){
		$('.pads-area input').show();
	}
	
}
/* end performance */

/* price calculation */
$('#from').change(function(){
	$('#to option').disable(false);
	$('#to-' + $('#from').val()).disable(true);
	calculatePrice();
});
$('#to').change(function(){
	$('#from option').disable(false);
	$('#from-' + $('#to').val()).disable(true);
	calculatePrice();
});
$('#klas').change(calculatePrice);
$('#num').change(calculatePrice);
$('#pound').change(calculatePrice);

function calculatePrice(){
	var price = 1200.0, ffrom = 1.0, fto = 2.0, klas = 0.1, num = 1.0, pound = 0.01;
	
	(!isNaN( $('#klas').val() )) ? klas = parseFloat( $('#klas').val() ): fto = 2.0;
	(!isNaN( $('#num').val() ) && $('#num').val() != '') ? num = parseFloat( $('#num').val() ): fto = 2.0;
	(!isNaN( $('#pound').val() ) && $('#pound').val() != '') ? pound = parseFloat( $('#pound').val() ): fto = 2.0;
	
	price *= Math.abs( $('#from').val() - $('#to').val() ) * (1.0 + klas) * num * (1.0 + pound);
	
	if( isNaN(price) ){
		$('.digits').val('0 грн.');
	}else{
        $('.digits').val(price.toFixed(2) + ' грн.');
	}
}