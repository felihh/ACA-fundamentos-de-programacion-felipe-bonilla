document.getElementById('boton_registro').addEventListener('click', function() {
    // Obtener los valores de la fecha de nacimiento
    const dia = parseInt(document.getElementById('input7').value);
    const mes = document.getElementById('meses_opciones').value;
    const año = parseInt(document.getElementById('input9').value);
    
    // Verificar que se hayan ingresado correctamente los datos
    if (!dia || !mes || !año) {
        mostrarMensaje('error', 'Por favor ingresa una fecha completa');
        return;
    }

    // Obtener la fecha actual
    const fechaActual = new Date();
    const fechaNacimiento = new Date(año, getMesNumero(mes) - 1, dia); // Los meses en JavaScript son 0-indexed
  
    // Calcular la edad
    const edad = calcularEdad(fechaNacimiento);
  
    // Validación de edad
    if (edad < 18) {
        mostrarMensaje('error', 'Debes ser mayor de 18 años.');
        return;
    } else if (edad > 25) {
        mostrarMensaje('error', 'Debes tener menos de 25 años.');
        return;
    }
  
    // Si la edad es válida, mostrar el mensaje de éxito y limpiar el formulario
    mostrarMensaje('exito', '¡Ya estás registrado!');
    limpiarFormulario();
    // Agregar clase 'registrado' al formulario para ocultar los campos
    document.querySelector('.formulario-militar').classList.add('registrado');
});
  
function mostrarMensaje(tipo, mensaje) {
    // Eliminar cualquier mensaje previo que pueda existir
    const mensajesExistentes = document.querySelectorAll('.mensaje-exito, .mensaje-error');
    mensajesExistentes.forEach(mensaje => mensaje.remove());

    // Crear el nuevo mensaje
    const contenedor = document.createElement('div');
    contenedor.classList.add(tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error');
    contenedor.textContent = mensaje;

    // Si el tipo es 'error', lo agregamos debajo del formulario.
    if (tipo === 'error') {
        document.querySelector('.formulario-militar').appendChild(contenedor);
    } else {
        // Si el tipo es 'exito', mostramos el mensaje y limpiamos el formulario
        const formulario = document.querySelector('.formulario-militar');
        formulario.innerHTML = ''; // Limpiar todo el formulario
        formulario.appendChild(contenedor); // Agregar mensaje de éxito
    }
}

  
// Función para calcular la edad
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mes = fechaActual.getMonth();
    const dia = fechaActual.getDate();
  
    if (mes < fechaNacimiento.getMonth() || (mes === fechaNacimiento.getMonth() && dia < fechaNacimiento.getDate())) {
        edad--;
    }
  
    return edad;
}
  
// Función para convertir el mes de nombre a número
function getMesNumero(mes) {
    const meses = {
        enero: 1,
        febrero: 2,
        marzo: 3,
        abril: 4,
        mayo: 5,
        junio: 6,
        julio: 7,
        agosto: 8,
        septiembre: 9,
        octubre: 10,
        noviembre: 11,
        diciembre: 12
    };
  
    return meses[mes.toLowerCase()] || 0; // Retorna el número del mes o 0 si no se encuentra
}
  
// Función para limpiar el formulario
function limpiarFormulario() {
    const inputs = document.querySelectorAll('.formulario-militar input');
    const selects = document.querySelectorAll('.formulario-militar select');
    inputs.forEach(input => input.value = '');
    selects.forEach(select => select.selectedIndex = 0);
}

  


