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

document.addEventListener('DOMContentLoaded', cargarDatos);
//Cargando datos del viaje
function cargarDatos() {
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



    const paises = crearListado(dondeViajo, "pais");

    cargarSelect(paises, selectPais);

    selectPais.addEventListener('change', function (e) {
        selectDestino.innerHTML = '<option value=""> -- Seleccionar -- </opcion>';

        const destinos = dondeViajo.filter(elem => elem.pais.toLocaleLowerCase().replace(' ', '-') == e.target.value);

        const listaDestinos = crearListado(destinos, "destino");

        cargarSelect(listaDestinos, selectDestino)
    });


    calcularViaje.addEventListener('focus', calcularDatos);

    function calcularDatos(e) {
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
        function restaFechas(f1, f2) {
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
        if (categEleg == "Business") {
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
        for (var i = 0; i < listadoSeleccionado.length; i++) {
            resultadoViaje.innerHTML += listadoSeleccionado[i] + '</br>';
        }

        // Cargar total en HTML
        sumaTotal.innerHTML = "$ " + totalPagar;
        sumaTotal.classList.add('sumatotal');


        // Abre y cierra menu desplegable
        (function ($) {
            "use strict";
            var openBtn = $("#btnCalcular"),
                closeBtn = $("#close-button"),
                menu = $(".menu-wrap");
            // Open menu when click on menu button
            openBtn.on("click", function () {
                menu.addClass("active");
            });
            // Close menu when click on Close button
            closeBtn.on("click", function () {
                menu.removeClass("active");
            });
        })(jQuery);

        var nuevoViaje = new viaje(paisEleg, destinoEleg, fechaIdaEleg, fechaVueltaEleg, cantidadPasajeros, categEleg, totalPagar);
        localStorage.setItem('viaje', JSON.stringify(nuevoViaje));


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Modal pago y TC
        const tarjeta = document.querySelector('#tarjeta'),
            btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
            formulario = document.querySelector('#formulario-tarjeta'),
            numeroTarjeta = document.querySelector('#tarjeta .numero'),
            nombreTarjeta = document.querySelector('#tarjeta .nombre'),
            logoMarca = document.querySelector('#logo-marca'),
            firma = document.querySelector('#tarjeta .firma p'),
            mesExpiracion = document.querySelector('#tarjeta .mes'),
            yearExpiracion = document.querySelector('#tarjeta .year'),
            modalContent = document.querySelector('#modal-content');
        ccv = document.querySelector('#tarjeta .ccv');

        // * Volteamos la tarjeta para mostrar el frente.
        const mostrarFrente = () => {
            if (tarjeta.classList.contains('active')) {
                tarjeta.classList.remove('active');
            }
        }

        // * Rotacion de la tarjeta
        tarjeta.addEventListener('click', () => {
            tarjeta.classList.toggle('active');
        });

        // * Boton de abrir formulario
        btnAbrirFormulario.addEventListener('click', () => {
            btnAbrirFormulario.classList.toggle('active');
            formulario.classList.toggle('active');
            modalContent.classList.toggle('active');
        });

        // * Select del mes generado dinamicamente.
        for (let i = 1; i <= 12; i++) {
            let opcion = document.createElement('option');
            opcion.value = i;
            opcion.innerText = i;
            formulario.selectMes.appendChild(opcion);
        }

        // * Select del año generado dinamicamente.
        const yearActual = new Date().getFullYear();
        for (let i = yearActual; i <= yearActual + 8; i++) {
            let opcion = document.createElement('option');
            opcion.value = i;
            opcion.innerText = i;
            formulario.selectYear.appendChild(opcion);
        }

        // * Input numero de tarjeta
        formulario.inputNumero.addEventListener('keyup', (e) => {
            let valorInput = e.target.value;

            formulario.inputNumero.value = valorInput
                // Eliminamos espacios en blanco
                .replace(/\s/g, '')
                // Eliminar las letras
                .replace(/\D/g, '')
                // Ponemos espacio cada cuatro numeros
                .replace(/([0-9]{4})/g, '$1 ')
                // Elimina el ultimo espaciado
                .trim();

            numeroTarjeta.textContent = valorInput;

            if (valorInput == '') {
                numeroTarjeta.textContent = '#### #### #### ####';

                logoMarca.innerHTML = '';
            }

            if (valorInput[0] == 4) {
                logoMarca.innerHTML = '';
                const imagen = document.createElement('img');
                imagen.src = 'multimedia/visa.png';
                logoMarca.appendChild(imagen);
            } else if (valorInput[0] == 5) {
                logoMarca.innerHTML = '';
                const imagen = document.createElement('img');
                imagen.src = 'multimedia/mastercard.png';
                logoMarca.appendChild(imagen);
            }

            // Volteamos la tarjeta para que el usuario vea el frente.
            mostrarFrente();
        });

        // * Input nombre de tarjeta
        formulario.inputNombre.addEventListener('keyup', (e) => {
            let valorInput = e.target.value;

            formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
            nombreTarjeta.textContent = valorInput;
            firma.textContent = valorInput;

            if (valorInput == '') {
                nombreTarjeta.textContent = 'Jhon Doe';
            }

            mostrarFrente();
        });

        // * Select mes
        formulario.selectMes.addEventListener('change', (e) => {
            mesExpiracion.textContent = e.target.value;
            mostrarFrente();
        });

        // * Select Año
        formulario.selectYear.addEventListener('change', (e) => {
            yearExpiracion.textContent = e.target.value.slice(2);
            mostrarFrente();
        });

        // * CCV
        formulario.inputCCV.addEventListener('keyup', () => {
            if (!tarjeta.classList.contains('active')) {
                tarjeta.classList.toggle('active');
            }

            formulario.inputCCV.value = formulario.inputCCV.value
                // Eliminar los espacios
                .replace(/\s/g, '')
                // Eliminar las letras
                .replace(/\D/g, '');

            ccv.textContent = formulario.inputCCV.value;
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const botonFinalizar = document.querySelector('#btn-finalizar');
        
        botonFinalizar.addEventListener('click', function () {
            const div = document.createElement('div');
            div.classList.add('mt-10', 'text-left');

            div.innerHTML = `
                <p>Compra exitosa</p>
                `;

            const resultadoTajeta = document.querySelector('#resultado');
            // Mostrar el spinner
            const spinner = document.querySelector('#cargando');
            spinner.style.display = 'flex';

            setTimeout(() => {
                spinner.style.display = 'none';
                resultadoTajeta.appendChild(div);
            }, 3000);
        })
    }
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


/* var botonBrasil = document.querySelector('#botonBrasil');
botonBrasil.addEventListener('click', paquetes('Brasil', 'Rio de Janeiro'));


function paquetes(p, d, fI, fV, pA, c, pR){
    selectPais = p;
    selectDestino = d;
    calendarioIda = fI;
    calendarioVuelta = fV;
    selectPasajeros = pA;
    selectCategoria = c;
    pR
}
*/
