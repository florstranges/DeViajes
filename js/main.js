// INFORMACION
const dondeViajo = [
    {
        "pais": "Brasil",
        "destino": "Rio de Janeiro",
        "precio_dia": 1293.4 
    },
    {
        "pais": "Estados Unidos",
        "destino": "New York",
        "precio_dia": 5355.6
    },
    {
        "pais": "Europa",
        "destino": "Paris",
        "precio_dia": 2504
    },
    {
        "pais": "Brasil",
        "destino": "Florianópolis",
        "precio_dia": 1469 
    },
    {
        "pais": "Estados Unidos",
        "destino": "Miami",
        "precio_dia": 5028
    },
    {
        "pais": "Brasil",
        "destino": "Porto Seguro",
        "precio_dia": 2143
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

document.addEventListener('DOMContentLoaded', function(){
    //Cargando datos del viaje

        // Variales del proyecto
        const selectPais = document.querySelector('#pais');
        const selectDestino = document.querySelector('#destino');
        const calendarioIda = document.querySelector('#start');
        const calendarioVuelta = document.querySelector('#end');
        const selectPasajeros = document.querySelector('#pasaj');
        const selectCategoria = document.querySelector('#selectCategoria');

        const calcularViaje = document.querySelector('#btnCalcular');
        const resultadoViaje = document.querySelector('#listaViaje');
        const sumaTotal = document.querySelector('#sumaTotal');
        const comprar = document.querySelector('#btnComprarViaje');

        
        const paises = crearListado(dondeViajo, "pais");

        cargarSelect(paises, selectPais);

        selectPais.addEventListener('change', function (e){
            selectDestino.innerHTML = '<option value=""> -- Seleccionar -- </opcion>';

            const destinos = dondeViajo.filter(elem => elem.pais.toLocaleLowerCase().replace(' ', '-') == e.target.value);

            const listaDestinos = crearListado(destinos, "destino");

            cargarSelect(listaDestinos, selectDestino)
        });

        calcularViaje.addEventListener('click', calcularDatos);
        
        function calcularDatos(e){
            e.preventDefault();
            // Leer Pais Elegido
            var paisEleg = selectPais.value;
            // Leer Destino Elegido
            var destinoEleg = selectDestino.value;
            // Leer Fecha elegida
            var fechaIdaEleg = calendarioIda.value;
            var fechaVueltaEleg = calendarioVuelta.value;
            // Leer Cantidad de pasajeros
            var cantidadPasajeros = selectPasajeros.value;
            

            
            // Cantidad dias de viaje
            function restaFechas(f1,f2) {
                var fFecha1 = new Date(calendarioIda.value);
                var fFecha2 = new Date(calendarioVuelta.value);
                var dif = fFecha2 - fFecha1;
                var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
                return dias;
            }
            var diferenciaDias = restaFechas(calendarioIda.value, calendarioVuelta.value);

            // Buscar los precios
            precioDia = dondeViajo.find(elem => elem.destino.toLowerCase().replace(' ', '-') == destinoEleg)
            const precio_x_dia = precioDia.precio_dia;

            // Eligiendo la categoria
            var categEleg = selectCategoria.value;
            if(categEleg == "Business"){
                var categoriaElegida = 1.2 
            } else {
                var categoriaElegida = 1
            }

            // Calculando Total
            var totalPagar = Math.round((precio_x_dia * diferenciaDias) * (cantidadPasajeros) * (categoriaElegida));

            // Creando un array para el resumen
            var listadoSeleccionado = [];

            listadoSeleccionado.push("PAIS: " + paisEleg);
            listadoSeleccionado.push("DESTINO: " + destinoEleg);
            listadoSeleccionado.push("FECHA DE IDA: " + fechaIdaEleg);
            listadoSeleccionado.push("FECHA DE VUELTA: " + fechaVueltaEleg);
            listadoSeleccionado.push("CANTIDAD DE PASAJEROS: " + cantidadPasajeros);
            listadoSeleccionado.push("CATEGORIA: " + categEleg);

            // Cargando resumen en el HTML 
            resultadoViaje.innerHTML = ''
            resultadoViaje.classList.add('resumen');
            for(var i = 0; i < listadoSeleccionado.length; i++){
                resultadoViaje.innerHTML += listadoSeleccionado[i] + '</br>';
            }

            // Cargar total en HTML
            sumaTotal.innerHTML = "$ " + totalPagar;
            sumaTotal.classList.add('sumatotal');

        }
});




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
