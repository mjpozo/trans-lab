/* Holiii acá va tu código también */
$(document).ready(function() {

	//validación del formulario
	function validateForm(){
		$(".btn-login").click(function(){
			//valores de los inputs
			var idCorreo = $("#correo-form").val();
			var idContrasena = $("#pass-form").val();

			//guardamos correo con localStorage
			localStorage.setItem("email",idCorreo);

			//se agregan toast como alertas
			if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo) && !(/^[0-9].{3,7}$/).test(idContrasena)){
				Materialize.toast('¡CORREO Y CONTRASEÑA INVÁLIDAS!', 4000);
			} else if (!(/^[0-9].{3,7}$/).test(idContrasena)){
				Materialize.toast('¡CONTRASEÑA INVÁLIDA!', 4000);
			} else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo) || !(/^[0-9].{3,7}$/).test(idContrasena)){
				Materialize.toast('¡CORREO INVÁLIDO!', 4000);
			} else {
				$(this).attr("href","index-options.html");
			}

			//se limpian los inputs
			document.getElementById("correo-form").value = "";
			document.getElementById("pass-form").value = "";
		});
	}
	validateForm();

});