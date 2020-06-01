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
	
	/*for the second part I'm using a function for dynamically added elements
	  as the elements are moving constantly*/
	  
	//change the first one
	var changeFontSize = false;
	$(document).on('click', '#moving1', function(e) {
		$(e.target).css('font-size', changeFontSize ? '35px' : '25px');
		changeFontSize = !changeFontSize;
	});
	
	//change the third one
	var isItRed = false;
	$(document).on('mouseover', '#moving3', function(e) {
		$(this).css('color', isItRed ? 'red' : 'black');
		isItRed = !isItRed;
	});
});
