// Declarar array con las palabras
const palabras = ["RESCATE", "ACOTADO", "CORNISA", "LASTRAR", "AVISTAR", "CABEZAL", "DILECTO", "SORTIJA", "POLLINO", "MIRADOR", "ARRABAL", "FRAGATA", "CANSINO", "COLADOR", "OBCECAR", "INSIGNE", "PASADOR", "CALIDAD", "DIALOGO", "MUTILAR"];
let intentos = 7;
let fallos = 0;
let puntuacion = 0;
let puntuacionMaxima = 0;
let letrasAdivinadas = 0;
let palabraElegida = "";

const palabraInputs = document.querySelectorAll("#palabras input"); 
const letraInput = document.querySelector("#botones input"); 
const comenzarBtn = document.querySelector("#comenzar"); 
const comprobarBtn = document.querySelector("#comprobar");

// nth-child para seleccionar los elementos en orden de aparición de las P en html
const fallosPuntuacion = document.querySelector("#puntuacion p:nth-child(4)"); 
const puntos = document.querySelector("#puntuacion p:nth-child(1)"); 
const puntuacionMaximaJuego = document.querySelector("#puntuacion p:nth-child(3)"); 
const restante = document.querySelector("#puntuacion p:nth-child(6)");

function aleatorio(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleat = Math.random() * numPosibilidades;
    aleat = Math.round(aleat);
    return parseInt(inferior) + aleat;
}

function elegirPalabra() {
    if (palabras.length === 0) {
        alert("No quedan palabras para jugar.");
        return;
    }

    let i = aleatorio(0, palabras.length - 1);
    palabraElegida = palabras[i];
    palabras.splice(i, 1);
    palabraInputs.forEach(input => input.value = "");
    fallos = 0;
    letrasAdivinadas = 0;
    puntuacion = 0;
    fallosPuntuacion.textContent = `Num fallos actuales: ${fallos}`;
    puntos.textContent = `Puntos actuales: ${puntuacion}`;
    restante.textContent = `Palabras restantes: ${palabras.length}`;
    letraInput.value = "";
    letraInput.removeAttribute("readonly");
    comprobarBtn.removeAttribute("disabled");

    console.log("Palabra elegida: " + palabraElegida);
}
function comprobarLetra() {
    let letraIngresada = letraInput.value.toUpperCase();
    if (!/^[A-ZÑ]$/.test(letraIngresada)) {
        alert("Introduce una letra válida sin tildes.");
        letraInput.value = "";
        return;
    }

    let acierto = false;
    for (let i = 0; i < palabraElegida.length; i++) {
        if (palabraElegida[i] === letraIngresada && palabraInputs[i].value === "") {
            palabraInputs[i].value = letraIngresada;
            acierto = true;
            letrasAdivinadas++;
        }
    }

    if (!acierto) {
        fallos++;
        fallosPuntuacion.textContent = `Num fallos actuales: ${fallos}`;
    }
    puntuacion = letrasAdivinadas * (7 - fallos);
    puntos.textContent = `Puntos actuales: ${puntuacion}`;
    if (letrasAdivinadas === palabraElegida.length) {
        alert(`¡Has ganado! Tu puntuación ha sido de ${puntuacion}`);
        if (puntuacion > puntuacionMaxima) {
            puntuacionMaxima = puntuacion;
            puntuacionMaximaJuego.textContent = `Puntuación máxima: ${puntuacionMaxima}`;
        }
        reiniciar();
    } else if (fallos === 7) {
        alert(`Has perdido. La palabra era ${palabraElegida}`);
        reiniciar();
    }

    letraInput.value = "";
}

function reiniciar() {
    comprobarBtn.setAttribute("disabled", "true");
    letraInput.setAttribute("readonly", "true");
    palabraElegida = "";
}

comenzarBtn.addEventListener("click", elegirPalabra);
comprobarBtn.addEventListener("click", comprobarLetra);
