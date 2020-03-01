$('#Carousel').carousel({
	interval: 5000,
	touch: true
});

$(document).on('click', '.skip-button', function(){
	$('.carousel-slider').slideUp();
	$('.login-container').slideDown();
});