$(document).ready(fixed);
var tal ;
function fixed(){
	 tal = $('.').height();
	 console.log(tal)


	 $(window).on('scroll', cambio);
	
}

function cambio(){
	if($(window).scrollTop()){
		

		$('menu').addClass('menu-fixed');

	}else{

		$('menu').removeClass('menu-fixed');

	}
}

