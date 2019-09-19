$(document).ready(menu);

function menu(){
	$('.menu-responsive a').on('click', cambio);

	$(window).on('scroll',function(){

		var scrollTop = $('html').scrollTop();
		console.log(scrollTop)

		if( scrollTop >= 72 && !$('.menu-wrapper').hasClass('menu-fixed')){
			$('.menu-wrapper').addClass('menu-fixed');

			setTimeout(function(){
				$('.menu-wrapper').addClass('effect');
			}, 100);

		}else if (scrollTop == 0 && $('.menu-wrapper').hasClass('menu-fixed')){

			setTimeout(function(){
				$('.menu-wrapper').removeClass('effect');
				$('.menu-wrapper').removeClass('menu-fixed');
			}, 100);
			
		}


	});

}

function cambio(evento){
	event.preventDefault();
	$('nav').slideToggle();
}

