function anadirAlumno() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let tabla = document.getElementsByTagName("table")[0];
    const TABLE_HEADER = "<tr><th>Nombre</th><th>Apellidos</th></tr>";
    let nuevaFila = "<tr><td>" + nombre + "</td><td>" + apellidos + "</td></tr>";  
    let elemTablaVacia = document.getElementById("tablaVacia");
    if (nombre.trim().length(0) > 0 && apellidos.trim().length() > 0 && "No hay elementos" === elemTablaVacia)
    tabla.innerHTML += nuevaFila;
    document.getElementById("alumnoForm").reset();
}