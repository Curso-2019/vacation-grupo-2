$(document).ready(menu);

function menu(){
	$('.menu-responsive').on('click', cambio);

	$(window).on('scroll',function(){

		var scrollTop = $('html').scrollTop();
		

		if( scrollTop > 400 ){

			$('header').addClass('menu-fixed');

		} else {

			$('header').removeClass('menu-fixed');

		}



	});

}

function cambio(){
	$('nav').slideToggle();
}

