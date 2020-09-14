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