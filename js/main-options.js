
$(document).ready(function(){
	//para el menu hamburguesa
	$(".button-collapse").sideNav();

	//para redireccionar a las opciones
	$("#option-home").click(function(){
		$(this).attr('href','index-options.html');
	});

	//para redireccionar al perfil
	$("#option-perfil").click(function(){
		$(this).attr('href','index-profile.html');
	});

	$(".btn-perfil").click(function(){
		$(this).attr('href','index-profile.html');
	});

	//para redireccionar a las preguntas frecuentes
	$("#option-frecuentes").click(function(){
		$(this).attr('href','index-frecuentes.html');
	});

	$(".btn-frecuentes").click(function(){
		$(this).attr('href','index-frecuentes.html');
	});

	//para redireccionar a la consulta de saldo
	$("#option-saldo").click(function(){
		$(this).attr('href','index-saldo.html');
	});

	$(".btn-saldo").click(function(){
		$(this).attr('href','index-saldo.html');
	});

	//para redireccionar a la tarifa
	$("#option-tarifa").click(function(){
		$(this).attr('href','index-tarifa.html');
	});

	$(".btn-tarifa").click(function(){
		$(this).attr('href','index-tarifa.html');
	});
})