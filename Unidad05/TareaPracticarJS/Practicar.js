window.onload = function () {
    const entrada = prompt("Introduce números separados por espacios:");
    const numerosSeparados = entrada.split(" ");
    const pares = [];
    const impares = [];
    for (let i = 0; i < numerosSeparados.length; i++) {
        const numero = parseInt(numerosSeparados[i]);

        // Validamos si es un número válido
        if (null != numero) {
            if (numero % 2 == 0) {
                pares.push(numero);
            } else if (numero % 2 != 0) {
                impares.push(numero);
            }
        } else {
            alert("Has introducido un número que no es válido.");
        }
    }
    const mostrarPares = document.getElementById("pares");
    for (let i = 0; i < pares.length; i++) {
        const elemento = document.createElement("li");
        elemento.textContent = pares[i];
        mostrarPares.appendChild(elemento);
    }

    const mostrarImpares = document.getElementById("impares");
    for (let i = 0; i < impares.length; i++) {
        const elemento = document.createElement("li");
        elemento.textContent = impares[i];
        mostrarImpares.appendChild(elemento);
    }
};