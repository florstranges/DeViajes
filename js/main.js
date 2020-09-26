// INFORMACION
const dondeViajo = [
    {
        "pais": "Brasil",
        "destino": "Rio de Janeiro",
        "precio": 19401 
    },
    {
        "pais": "Estados Unidos",
        "destino": "New York",
        "precio": 80335
    },
    {
        "pais": "Europa",
        "destino": "Paris",
        "precio": 37560
    },
    {
        "pais": "Brasil",
        "destino": "Florianópolis",
        "precio": 22045 
    },
    {
        "pais": "Estados Unidos",
        "destino": "Miami",
        "precio": 75425
    },
    {
        "pais": "Brasil",
        "destino": "Porto Seguro",
        "precio": 32145
    }
]

// Convertir a JSON
var jsonViaje = JSON.stringify(dondeViajo)

// Transformo mi JSON a Objeto Arreglo
var objetoJson = JSON.parse(jsonViaje)


// Constructor Viaje
class viaje {
    constructor(pais, destino, fechaIda, fechaVuelta, cantPasajeros, categoria, precio) {
        this.pais = pais;
        this.destino = destino;
        this.fechaIda = fechaIda;
        this.fechaVuelta = fechaVuelta;
        this.cantPasajeros = cantPasajeros;
        this.categoria = categoria;
        this.precio = precio;
    }


}

document.addEventListener('DOMContentLoaded', cargarDestinos);

// Cargar informacion al select
function cargarDestinos(){

    const selectPais = document.querySelector('#pais');
    const selectDestino = document.querySelector('#destino');

    const paises = crearListado(dondeViajo, "pais");

    cargarSelect(paises, selectPais);

    selectPais.addEventListener('change', function (e){
        selectDestino.innerHTML = '<option value=""> -- Seleccionar -- </opcion>';

        const destinos = dondeViajo.filter(elem => elem.pais.toLocaleLowerCase().replace(' ', '-') == e.target.value);

        const listaDestinos = crearListado(destinos, "destino");

        cargarSelect(listaDestinos, selectDestino)
    });

    const comprar = document.querySelector('#comprarViaje');
	formulario.addEventListener('submit', botonComprarViaje);
}


// Genero listado para los select
function crearListado(array, parametro) {
	const listado = [];

	array.forEach(elemento => {
		if (!listado.includes(elemento[parametro])) {
			listado.push(elemento[parametro]);
		}
	})
	return listado.sort();
}

// Cargo contenido en los Select
function cargarSelect(array, select) {
	array.forEach(element => {
		let option = document.createElement('option');
		option.value = element.toLowerCase().replace(' ', '-');
		option.textContent = element;
		select.appendChild(option);
	})
}



