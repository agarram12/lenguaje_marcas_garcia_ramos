function validaForm() {
    let valid = true;
    document.getElementById("tel_cont").classList.remove("error");
    document.getElementById("pizza").classList.remove("error");
    //devuelve true si todos los datos son correctos
    // devuelve false si algún dato es incorrecto
    let dir = document.getElementById("direccion").value;
    let tel = document.getElementById("telefono").value;
    let piz = document.getElementById("pizza").value;
    if(null == dir || dir.length < 3) {
        valid = false;
        //console.log("la direccion no es válida");
    }
    if (null == tel || tel.length != 9 || isNaN(tel)) {
        valid = false;
        document.getElementById("tel_cont").classList.add("error");
        //console.log("el telefono no es válido");
    }
    if (null == piz || piz === "") {
        valid = false;
        document.getElementById("pizza").classList.add("error");
        //console.log("no ha escogido ninguna pizza");
    }
    return valid;
}

function calcularPrecio() {
    
    let pizza = document.getElementById("pizza").value;
    if (isNaN(cantidad)) {

    } else {
        switch (pizza) {
            case barbacoa:
                precio = precioBbq;
                break;
            case carbonara:
                precio = precioCarbo;
                break;
            case cuatroquesos:
                precio = precio4Quesos;
                break;
            case delahuerta:
                precio = precioHuerta;
                break;
        }
        precio *= cantidad;
    }
    let precioTotal = document.getElementById("precioTotal");
    precioTotal.innerHTML = "" + precio + " €";
}

function anadirPizza() {
    const pizzaContainer = document.getElementById("pizza-container");
    const nPizza = document.createElement("div");
    nPizza.classList.add("pizza-entry");
    nPizza.innerHTML =`
        <select name="pizza" class="pizza-select">
            <option value="">Elige tu pizza</option>
            <option value="barbacoa">Barbacoa (9,90 €)</option>
            <option value="carbonara">Carbonara (11,90 €)</option>
            <option value="cuatroquesos">Cuatro Quesos (8,90 €)</option>
            <option value="delahuerta">De la huerta(9,90 €)</option>
        </select>
        <input type="number" name="cantidad" class="cantidad" min="1" max="10" value="1">
    `;
    pizzaContainer.appendChild(nPizza);
}

function calcularPrecio() {
    const precioBbq = 9.9;
    const precioCarbo = 11.90;
    const precio4Quesos = 8.90;
    const precioHuerta = 9.90;
    const nPizza = document.getElementsByClassName("pizza-entry");
    let total = 0;
    let listaPizzas = document.getElementById("lista-pizzas");
    listaPizzas.innerHTML = "";

    for (let pizza of nPizza) {
        let pizza = entry.querySelector(".pizza-select").value;
        let cantidad = Number(entry.querySelector(".cantidad").value);
        if (pizza) {
            let subtotal;
            if (pizza === "barbacoa") subtotal = PRECIO_BARBACOA * cantidad;
            else if (pizza === "carbonara") subtotal = PRECIO_CARBONARA * cantidad;
            else if (pizza === "cuatroquesos") subtotal = PRECIO_CUATROQUESOS * cantidad;
            else if (pizza === "delahuerta") subtotal = PRECIO_DELAHUERTA * cantidad;
            
            total += subtotal;
            let li = document.createElement("li");
            li.textContent = `${cantidad} x ${pizza} - ${subtotal.toFixed(2)} €`;
            listaPizzas.appendChild(li);
        }
    }
    document.getElementById("precioTotal").innerHTML = `Total: ${total.toFixed(2)} €`;
}