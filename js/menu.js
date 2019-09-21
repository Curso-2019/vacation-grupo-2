$(document).ready(menu);

function menu(){
	$('.menu-responsive a').on('click', cambio);

	$(window).on('scroll',function(){

		var scrollTop = $('html').scrollTop();

		if( scrollTop >= 72 && !$('.menu-wrapper').hasClass('menu-fixed')){
			$('.menu-wrapper').addClass('menu-fixed');


		}else if (scrollTop == 0 && $('.menu-wrapper').hasClass('menu-fixed')){

			$('.menu-wrapper').removeClass('menu-fixed');
	
		}


	});

}

function cambio(evento){
	event.preventDefault();
	$('nav').slideToggle();
}

