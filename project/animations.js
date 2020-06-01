$(document).ready(function(){

	//move all of them at the same time
	setInterval( function(){
	  var currentLeft = parseFloat( $('h1').css('left') );
	  currentLeft++; 
	  $('h1').css('left', currentLeft+'px');
	  
	  if(currentLeft > $(window).width()){
	  $('h1').css('left', '0px');
	  }
	  
	}, 5 );
	
	//change the first one
	var changeFontSize = false;
	$(#'moving1').click(function() {
		$(this).css('font-size', changeFontSize ? '35px' : '25px');
		changeFontSize = !changeFontSize;
	});

	//change the third one
	var isItRed = false;
	$(#'moving3').mouseover(function() {
		$(this).css('color', isItRed ? 'red' : 'black');
		isItRed = !isItRed;
	});

});
