// Función para generar un número aleatorio entre 1 y 10
function obtenerNumeroCorrecto() {
    return Math.floor(Math.random() * 10) + 1;
}

// Generamos el número correcto para el juego
let botonCorrecto = obtenerNumeroCorrecto();

// Seleccionamos todos los botones y el área de mensaje
const botones = document.querySelectorAll('.boton');
const mensaje = document.getElementById('mensaje');

// Función para manejar el evento click en los botones
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        // Si el botón ya ha sido presionado, no hacer nada
        if (this.classList.contains('presionado')) {
            return;
        }

        // Limpiar mensaje anterior
        mensaje.textContent = '';

        // Verificar si el botón presionado es el correcto
        if (parseInt(this.id.replace('boton', '')) === botonCorrecto) {
            this.classList.add('correcto');
            mensaje.textContent = '¡Correcto! 🎉';
        } else {
            this.classList.add('incorrecto');
            mensaje.textContent = '¡Incorrecto! ❌';
        }

        // Finalmente, marca el botón como presionado
        this.classList.add('presionado');
    });
});

// Agregar la función de reiniciar el juego
const reiniciarButton = document.getElementById('reiniciar');
reiniciarButton.addEventListener('click', () => {
    // Resetear el estado de los botones
    botones.forEach(boton => {
        boton.classList.remove('presionado', 'correcto', 'incorrecto');
    });

    // Resetear el mensaje
    mensaje.textContent = '';

    // Generar un nuevo número correcto
    botonCorrecto = obtenerNumeroCorrecto();
});
