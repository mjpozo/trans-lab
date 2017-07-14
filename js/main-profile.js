
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
	$(".cont-mail").html(localStorage.getItem("email"));
	//window.localStorage.clear();

	//guardamos los números de las tarjetas ingresadas
	$(".btn-agregar").click(function(){

		localStorage.removeItem("email");

		var num = $("#myTarget").val();

		localStorage.setItem("minumber",num);

		var arrNumber = [];
		var number;
		for (j=0 ; j<localStorage.length ; j++){
			number = localStorage.key(j);
			arrNumber.push(localStorage.getItem(number));

			$(".cont-numbers").append('<div class="misTarjetas">' + arrNumber[j] + '</div>');
			//document.getElementById("myTarget").value = "";
		}

		//$(".cont-numbers").append('<div class="misTarjetas">' + $("#myTarget").val() + '</div>');
		document.getElementById("myTarget").value = "";
	});
	
})