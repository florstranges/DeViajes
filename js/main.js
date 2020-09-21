// Objeto Viaje

function viaje(destino, fechaIda, fechaVuelta, cantPasajeros, categoria, precio) {
    this.destino = destino;
    this.fechaIda = fechaIda;
    this.fechaVuelta = fechaVuelta;
    this.cantPasajeros = cantPasajeros;
    this.categoria = categoria;
    this.precio = precio;
}


// Definir Variables
// Ejemplo Rio de Janeiro

var destino = "Rio de Janeiro";

var diaIda = 5;
var mesIda = 04;
var anioIda = 2021;
var fechaIda = [];
fechaIda = fechaIda.concat(diaIda, mesIda, anioIda);

var diaVuelta = diaIda + 15;
var fechaVuelta = [];
fechaVuelta = fechaVuelta.concat(diaVuelta, mesIda, anioIda);

var cantPasajeros = 2;

var categoria = "Business";

var precio = 19401


// Carga de objeto Brasil 

var brasil = new viaje (destino, fechaIda, fechaVuelta, cantPasajeros, categoria, precio);

console.log(brasil);

// Desafio 08 - Interaccion con HTML

function rioDeJaneiro () {
    document.querySelector('#destiny').value = "Rio de Janeiro";
    document.querySelector('#start').value = "2021-04-05";
    document.querySelector('#end').value = "2021-04-20";
    document.querySelector('#pasajeros').value = "2";
    document.querySelector('#categoria').value = "Classic";
    
    var totalCompra = document.createElement('H4');
    var monto = document.createTextNode('Total: AR$ 19.401');
    totalCompra.appendChild(monto);

    var total = document.querySelector('#totalCompra');
    total.insertBefore(totalCompra, total.childNodes[6]);
}

function newYork () {
    document.querySelector('#destiny').value = "New York";
    document.querySelector('#start').value = "2021-05-17";
    document.querySelector('#end').value = "2021-05-28";
    document.querySelector('#pasajeros').value = "1";
    document.querySelector('#categoria').value = "Business";
    
    var totalCompra = document.createElement('H4');
    var monto = document.createTextNode('Total: AR$ 80.335');
    totalCompra.appendChild(monto);

    var total = document.querySelector('#totalCompra');
    total.insertBefore(totalCompra, total.childNodes[6]);
}

function paris () {
    document.querySelector('#destiny').value = "Paris";
    document.querySelector('#start').value = "2021-04-03";
    document.querySelector('#end').value = "2021-04-12";
    document.querySelector('#pasajeros').value = "2";
    document.querySelector('#categoria').value = "Classic";

    var totalCompra = document.createElement('H4');
    var monto = document.createTextNode('Total: AR$ 37.560');
    totalCompra.appendChild(monto);

    var total = document.querySelector('#totalCompra');
    total.insertBefore(totalCompra, total.childNodes[6]);
}