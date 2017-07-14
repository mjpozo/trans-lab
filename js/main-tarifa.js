
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

	//para calcular la tarifa final
	$(".btn-tarifa").click(function(){

		//primero mostramos la tarifa
		$(".info-rate").empty();
		$(".info-rate").append('<div><div class="info-title center">COSTO PASAJE</div><div class="info-saldo center"><h4>$' + $("select").first().val() + '</h4></div></div>');

		//hacemos la llamada al ajax para obtener el saldo
		var idTargetUno = $("#num-target-rate").val();
		var idTargetDos = $("select").eq(1).val();
		console.log(idTargetDos);

		if (idTargetUno){
			llamarAjax(idTargetUno);
		} else if (idTargetDos){
			//bloqueamos el input
			document.getElementById("num-target-rate").disabled=true;
			llamarAjax(idTargetDos);
		}

		function llamarAjax(idTarget){
			$.ajax({
				url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + idTarget,
				type: 'GET',
				dataType: 'json',
				//data: {param1: 'value1'},
			})
			.done(function(response) {
				console.log("success");
				//rescatamos el saldo de la tarjeta, sin . ni $
				console.log("saldo: " + response.saldoTarjeta.split(""))
				var miSaldo = "";
				response.saldoTarjeta.split("").forEach(function(e){
					if (isNaN(e) == false){
						miSaldo += e;
					}
				});
				console.log("saldo final: " + miSaldo);

				//ahora mostramos el saldo final

				var saldoFinal = parseInt(miSaldo) - parseInt($("select").first().val());

				if (isNaN(saldoFinal)){
					$(".saldo-final").empty();
					$(".saldo-final").append('<div><div class="info-title center">SALDO FINAL</div><div class="info-saldo center"><h4>Tarjeta sin uso</h4></div></div>');
				} else {
					$(".saldo-final").empty();
					$(".saldo-final").append('<div><div class="info-title center">SALDO FINAL</div><div class="info-saldo center"><h4>$' + saldoFinal + '</h4></div></div>');
				}
			})
			.fail(function(url) {
				console.log("error");
				$(".saldo-final").empty();
				$(".saldo-final").append('<div><div class="info-title center">COSTO PASAJE</div><div class="info-saldo center"><h4>id de tarjeta inválido</h4></div></div>');
				
			})
			/*.always(function() {
				console.log("complete");
			});*/
		}
		

		document.getElementById("num-target-rate").value = "";

	})
})