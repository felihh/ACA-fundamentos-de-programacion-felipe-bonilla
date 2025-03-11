const inputElementCelsius = document.getElementById('celsius'); // El input para Celsius
const inputElementFahrenheit = document.getElementById('fahrenheit'); // El input para Fahrenheit
const btnConvertirCelsius = document.getElementById('btnConvertir1'); // El botón para convertir de Celsius a Fahrenheit
const btnConvertirFahrenheit = document.getElementById('btnConvertir2'); // El botón para convertir de Fahrenheit a Celsius
const resultadoDivCelsius = document.getElementById('resultado1'); // El div para mostrar el resultado de Celsius a Fahrenheit
const resultadoDivFahrenheit = document.getElementById('resultado2'); // El div para mostrar el resultado de Fahrenheit a Celsius

// Función para convertir Celsius a Fahrenheit
btnConvertirCelsius.addEventListener('click', function() {
    // Capturar el valor del input
    const valorInputCelsius = inputElementCelsius.value;

    // Convertir el valor a número
    const numeroCelsius = parseFloat(valorInputCelsius);

    if (!isNaN(numeroCelsius)) {
        // Convertir Celsius a Fahrenheit
        const resultadoFahrenheit = (numeroCelsius * 9 / 5) + 32;
        // Mostrar el resultado
        resultadoDivCelsius.textContent = `${numeroCelsius} grados Celsius son igual a ${resultadoFahrenheit} grados Fahrenheit.`;
    } else {
        resultadoDivCelsius.textContent = 'Por favor, ingresa un número válido.';
    }
});

// Función para convertir Fahrenheit a Celsius
btnConvertirFahrenheit.addEventListener('click', function() {
    // Capturar el valor del input
    const valorInputFahrenheit = inputElementFahrenheit.value;

    // Convertir el valor a número
    const numeroFahrenheit = parseFloat(valorInputFahrenheit);

    if (!isNaN(numeroFahrenheit)) {
        // Convertir Fahrenheit a Celsius
        const resultadoCelsius = (numeroFahrenheit - 32) * 5 / 9;
        // Mostrar el resultado
        resultadoDivFahrenheit.textContent = `${numeroFahrenheit} grados Fahrenheit son igual a ${resultadoCelsius} grados Celsius.`;
    } else {
        resultadoDivFahrenheit.textContent = 'Por favor, ingresa un número válido.';
    }
});
