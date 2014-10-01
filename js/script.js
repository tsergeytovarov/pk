$(function(){
	
	$('.people-slider').bxSlider({
	  mode: 'fade',
	  auto: true,
	  pager: false
	});

	$('.bx-controls-direction').find('a').height( $('.bx-controls-direction a').width() )

	$('.open-menu').on('click',function(){
		$('nav').toggleClass('active');
		return false;
	})

	$(window).resize(function(){

		$('.bx-controls-direction').find('a').height( $('.bx-controls-direction a').width() )

	})

});