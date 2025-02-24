function generaLetraDni(numeroDni) {
    // declarar las letras como constante ya que nunca cambiarán
    
    let letra = 0;
    let respuesta = "No se trata de un DNI válido";
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    if (numeroDni.length == 8 && !isNaN(numeroDni) && Number(numeroDni) > 1 && Number(numeroDni) < 99999999) {
        let resto = Number(numeroDni) % 23;
        let letra = letras[resto];
        respuesta = numeroDni + letra;
    }
    return respuesta;
}