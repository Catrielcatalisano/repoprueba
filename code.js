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
