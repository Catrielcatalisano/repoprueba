function cotizarEnvio() {
    // valores del formulario
    var peso = parseFloat(document.getElementById('peso').value);
    var distancia = parseInt(document.getElementById('distancia').value);
    // precio por kg excedente y por km
    var precioPorKgExcedente = 250;
    var precioPorKm = 300;
    // Calcular costo de envío
    var costoEnvio = 0;
    if (peso <= 100) {
        costoEnvio = distancia * precioPorKm;
        
    } else {
        var pesoExcedente = peso - 100;
        costoEnvio = (pesoExcedente * precioPorKgExcedente) + (distancia * precioPorKm);
    }
    // Mostrar resultado
    document.getElementById('resultado').innerHTML = 'El costo de envío es: $' + costoEnvio.toFixed(2);
}
// Función para validar el formulario de retiro de contenedores
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombreEmpresa = document.getElementById("nombre-empresa").value;
    var fechaRetiro = document.getElementById("fecha-retiro").value;
    var numeroContenedor = document.getElementById("numero-contenedor").value;
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
  
    // Obtener el elemento donde se mostrará el mensaje
    var mensajeElemento = document.getElementById("mensaje");
  
    // Verificar si todos los campos están completos
    if (nombreEmpresa === "" || fechaRetiro === "" || numeroContenedor === "" || origen === "" || destino === "") {
      // Mostrar un mensaje de error si algún campo está vacío
      mensajeElemento.textContent = "Por favor, complete todos los campos del formulario.";
    } else {
      // Mostrar un mensaje indicando que la solicitud se ha enviado correctamente
      mensajeElemento.textContent = "Solicitud enviada correctamente.";
    }
  }
  // code.js

// ...

// Llamada a la función cuando se haga clic en el botón de envío del formulario
document.getElementById("formulario-retiro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    validarFormulario(); // Llamar a la función de validación
  });
  