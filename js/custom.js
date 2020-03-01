$('#Carousel').carousel({
	interval: false,
	touch: true
});

$(document).on('click', '.skip-button', function(){
	$('.carousel-slider').slideUp();
	$('.login-container').slideDown();
});