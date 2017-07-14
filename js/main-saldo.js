
$(document).ready(function(){
	//para el menu hamburguesa
	$(".button-collapse").sideNav();

	//para el select
	$('select').material_select();

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

	//creamos el select con DOM*****
	//NO PUDIMOS UTILIZARLO PORQUE NO PUDIMOS GUARDAR POR LOCAL STORAGE
	/*$(".select-saldo").append('<select><option value="" disabled selected>Choose your option</option></select>');
	for (i=0 ; i<arrNumber.length ; i++){
		$('select').append('<option value="' + i + '">' + arrNumber[i] + '</option>')
	}*/

	$(".btn-saldo").click(function(){
		var idTargetOne = $("#num-target").val();
		var idTargetTwo = $("select").val();
		if (idTargetOne){
			llamarAjax(idTargetOne);
		} else if (idTargetTwo){
			//bloqueamos el input
			document.getElementById("num-target").disabled=true;
			llamarAjax(idTargetTwo);
		}

		function llamarAjax(idTarget){
			//hacemos la llamada al ajax
			$.ajax({
				url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + idTarget,
				type: 'GET',
				dataType: 'json',
				//data: {param1: 'value1'},
			})
			.done(function(response) {
				console.log("success");

				$(".cont-info-saldo").empty();
				$(".cont-info-saldo").append('<div><div class="info-title center">SALDO TOTAL</div><div class="info-saldo center"><h3>' + response.saldoTarjeta + '</h3></div></div>');
			})
			.fail(function(url) {
				console.log("error");
				$(".cont-info-saldo").empty();
				$(".cont-info-saldo").append('<div><div class="info-title center">SALDO TOTAL</div><div class="info-saldo center"><h4>id de tarjeta inválido</h4></div></div>');
			})
			/*.always(function() {
				console.log("complete");
			});*/
		}
		
		
		document.getElementById("num-target").value = "";

	})
})