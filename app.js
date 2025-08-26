'use strict'

function calcularMult() {
    let v1 = parseInt(document.getElementById("multiplicado").value);

    let tabuada = " ";

    let i = 0;

    while (i <= 10) {
        tabuada += v1 + " x " + i + " = " + (v1 * i) + "<br>";
        i++;
    }

    document.getElementById("text").innerHTML = tabuada;

}

botaoCalcular.addEventListener('click', calcularMult)