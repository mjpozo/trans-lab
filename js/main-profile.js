
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

	//para redireccionar a las preguntas frecuentes
	$("#option-frecuentes").click(function(){
		$(this).attr('href','index-frecuentes.html');
	});

	//para redireccionar a la consulta de saldo
	$("#option-saldo").click(function(){
		$(this).attr('href','index-saldo.html');
	});

	//para redireccionar a la tarifa
	$("#option-tarifa").click(function(){
		$(this).attr('href','index-tarifa.html');
	});

	//agregamos el correo del usuario en el div contenedor
	$(".cont-mail").html("te odio");

	//guardamos los números de las tarjetas ingresadas
	$(".btn-agregar").click(function(){
		$(".cont-numbers").append('<div class="misTarjetas">' + $("#myTarget").val() + '</div>');
		document.getElementById("myTarget").value = "";
	});
	
})