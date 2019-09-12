$(document).ready(menu);

function menu(){
	$('.menu-responsive').on('click', cambio);
}

function cambio(){
	$('nav').slideToggle();
}