function Calcular() {
    var valor1 = document.getElementById('valor-1').value;
    var valor2 = document.getElementById('valor-2').value;

    var resultado = parseInt(valor1) + parseInt(valor2);

    document.getElementById('resultado').innerText = resultado;
}