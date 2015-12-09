$(document).ready(function(){
	$('main').bind('swipeleft', function(event){
		$('#suzswipe').removeClass().addClass('one');
	}); //end swipe left

	$('main').bind('swiperight', function(event){
		$('#suzswipe').removeClass().addClass('two');
	}); //end swipe right

	$('main').bind('taphold', function(event){
		$('#suzswipe').removeClass().addClass('lots');
	}); //end taphold

	$(window).on('orientationchange', function(){
		if(window.orientation == 0) {
			$('#suzswipe').removeClass().addClass('three');
		} else {
			$('#suzswipe').removeClass().addClass('four');
		}
	}); //end orientationchange

}); //end ready