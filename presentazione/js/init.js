
$.noConflict();
jQuery(function ($) {
	
	if ("ontouchstart" in document.documentElement) { 
    	$('.alert > div > p').text('<p>Tap on the left or right to navigate</p>');
	}



	impress().init();
	
	setTimeout(function () {

		$('.alert').fadeIn(1000, function() {
			setTimeout(function(){
				$('.alert').fadeOut(1000);
			}, 2000)
		});

	}, 2000);
	


});