// script.js

// Cargar sonidos
const clickSound = document.getElementById('click-sound');
const errorSound = document.getElementById('error-sound');

// Obtener el display
let pantalla = document.getElementById('pantalla');
let operacionActual = '';

// Reproducir sonido dado un ID
function reproducirSonido(id) {
    const sonido = document.getElementById(id);
    if (sonido) {
        sonido.play().catch(error => {
            console.error('Error al reproducir el sonido:', error);
        });
    } else {
        console.error('Sonido no encontrado:', id);
    }
}

// Añadir número al display
function agregarNumero(numero) {
    reproducirSonido('click-sound');
    operacionActual += numero;
    pantalla.value = operacionActual;
}

// Establecer operador
function agregarOperador(operador) {
    reproducirSonido('click-sound');
    operacionActual += ' ' + operador + ' ';
    pantalla.value = operacionActual;
}

// Limpiar pantalla
function limpiarPantalla() {
    reproducirSonido('click-sound');
    operacionActual = '';
    pantalla.value = '';
}

// Calcular resultado
function calcularResultado() {
    reproducirSonido('click-sound');
    try {
        operacionActual = eval(operacionActual);
        if (isNaN(operacionActual) || !isFinite(operacionActual)) {
            throw new Error('Error');
        }
        pantalla.value = operacionActual;
    } catch (error) {
        reproducirSonido('error-sound');
        pantalla.value = 'Error';
    }
}
