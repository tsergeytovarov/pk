$(function(){
	
	// слайдер с людьми на главной
	$('.people-slider').bxSlider({
	  mode: 'fade',
	  auto: true,
	  pager: false
	});

	// слайдер в контенте
	$('.content-slider').bxSlider({
	  mode: 'horizontal',
	  auto: true,
	  controls: false
	});

	// custom scrollbar
	$(".scroll-container").customScrollbar();

	$('.bx-controls-direction').find('a').height( $('.bx-controls-direction a').width() )

	// открытие меню в мобильной версии
	$('.open-menu').on('click',function(){
		$('nav').toggleClass('active');
		return false;
	})

	// обработки календаря

	// открытие закрытие по верхней панели
	$('.calendar').find('.header').on('click', function(){
		$(this).parents('.calendar').toggleClass('active');
		$('.over').toggleClass('active');
		$('body, html').toggleClass('hidden');
	})

	// чехорда дат в контролах

		// переменные
		var col_element_date = $('.date-slider').find('a').length;
		var col_element_date_hidden = col_element_date - 7;
		var col_element_top = col_element_date_hidden;
		var col_element_bottom = 0;
		var value_element_bottom = 0;

		// вверх
		$('.controls').find('.prev').on('click',function(){
			if ( !$('.calendar').hasClass('active') ) { 
				$('.calendar').addClass('active');
				$('.over').fadeIn(300);
				$('body, html').addClass('hidden');
			}
			if ( $(this).hasClass('disabled') ) return false; 
			value_element_bottom = value_element_bottom - 60;		
			$('.date-slider').css('bottom', value_element_bottom);
			col_element_top = col_element_top - 1;
			col_element_bottom = col_element_bottom + 1;
			if( col_element_top == 0){ $('.controls').find('.prev').addClass('disabled')} 
			else { $('.controls').find('.prev').removeClass('disabled')}
			if( col_element_bottom == 0){ $('.controls').find('.next').addClass('disabled')} 
			else {$('.controls').find('.next').removeClass('disabled')}
			return false;
		})

		// вниз
		$('.controls').find('.next').on('click',function(){
			if ( !$('.calendar').hasClass('active') ){ 
				$('.calendar').addClass('active');
				$('.over').fadeIn(300);
				$('body, html').addClass('hidden');
			}
			if ( $(this).hasClass('disabled') ) return false; 
			value_element_bottom = value_element_bottom + 60;		
			$('.date-slider').css('bottom', value_element_bottom);
			col_element_top = col_element_top + 1;
			col_element_bottom = col_element_bottom - 1;
			if( col_element_top == 0){$('.controls').find('.prev').addClass('disabled')} 
			else {$('.controls').find('.prev').removeClass('disabled')}
			if( col_element_bottom == 0){$('.controls').find('.next').addClass('disabled')} 
			else {$('.controls').find('.next').removeClass('disabled')}
			return false;
		})

		// активация даты
		$('.date-slider').find('a').on('click',function(){
			if ( !$('.calendar').hasClass('active') ){ 
				$('.calendar').addClass('active');
				$('.over').fadeIn(300);
				$('body, html').addClass('hidden');
			}
			$('.date-slider').find('a').removeClass('active');
			$(this).addClass('active');
			$('.current-date').text( $(this).attr('data-text') );
			return false;
		})

		// закрытие белой области
		$('.over').on('click',function(){
			$('.date-slider').find('a').removeClass('active');
			$(this).fadeOut(300);
			$('.calendar').removeClass('active');
			$('body, html').removeClass('hidden');
		})

	// скролл наверх
	$('.to-top').on('click', function() {
		$('body,html').animate({ scrollTop: 0 }, 500);
		return false;
	});

	// закрытие тизера
	$('.close-tizer-action').on('click', function(){
		$(this).parents('.tizer').fadeOut(300);
		return false;
	})

	// при ресайзе окна
	$(window).resize(function(){

		// размер кнопок слайдера
		$('.bx-controls-direction').find('a').height( $('.bx-controls-direction a').width() )

	})

});