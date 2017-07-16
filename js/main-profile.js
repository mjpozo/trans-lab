
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
	var arrNumber = new Array(5);
	$(".btn-agregar").click(function(){

		localStorage.removeItem("email");

		var num = $("#myTarget").val();

		//LOCALSTORAGE NO FUNCIONÓ PARA UN NÚMERO INDEFINIDO DE TARJETAS

		//localStorage.setItem("minumber",num);

		/*arrNumber.push(num);
		console.log(arrNumber)

		localStorage.setItem("numeros",JSON.stringify(arrNumber));
		console.log(typeof JSON.stringify(arrNumber))

		var numberStored = JSON.parse(localStorage.getItem("numeros"));
			console.log(typeof numberStored)
			$(".cont-numbers").append('<div class="misTarjetas">' + numberStored[numberStored.length-1] + '</div>');*/
		//}

		//$(".cont-numbers").append('<div class="misTarjetas">' + $("#myTarget").val() + '</div>');


		//pondremos un límite de 5 tarjetas ingresadas

		arrNumber.push(num);
		localStorage.setItem("number" + arrNumber.indexOf(arrNumber[arrNumber.length-1]).toString(),JSON.stringify(arrNumber[arrNumber.length-1]));

		var newTarget = JSON.parse(localStorage.getItem("number" + arrNumber.indexOf(arrNumber[arrNumber.length-1]).toString()));

		$(".cont-numbers").append('<div class="misTarjetas">' + newTarget + '</div>');

		document.getElementById("myTarget").value = "";
	});
	
})