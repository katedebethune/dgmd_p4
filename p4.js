$(document).ready(function(){
	$('main').bind('swipeleft', function(event){
		$('#suzswipe').removeClass().html('You just swiped left!').addClass('one');
	}); //end swipe left

	$('main').bind('swiperight', function(event){
		$('#suzswipe').removeClass().html('You just swiped right!').addClass('two');
	}); //end swipe right

	$('main').bind('taphold', function(event){
		$('#suzswipe').removeClass().html('You\'re in the middle of a taphold now!').addClass('three');
	}); //end taphold

	$(window).on('orientationchange', function(){
		if(window.orientation == 0) {
			$('#suzswipe').removeClass().html('This must be vertical orientation!').addClass('four');
		} else {
			$('#suzswipe').removeClass().html('This is horizontal orientation!').addClass('five');
		}
	}); //end orientationchange

}); //end ready