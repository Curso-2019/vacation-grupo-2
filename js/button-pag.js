$(document).on('ready', main);


function main(){
	$('botoncito').on('click', CuadradoAbiertoCerrado);
}


function CuadradoAbiertoCerrado(){
	if ($(this).hassClass('activado')) {
		$(this).removeClass('activado');
	} else {
		$(this).addClass('activado');
	}
}