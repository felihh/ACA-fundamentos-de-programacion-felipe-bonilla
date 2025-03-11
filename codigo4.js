const input_monto = document.getElementById('monto_registrado')
const boton_monto = document.getElementById('boton_resultado')
const resultado = document.getElementById('resultado')


boton_monto.addEventListener('click',function(){
    
    let porcentaje1 = 5;

    let porcentaje2 = 3;

    const numero_monto = input_monto.value;

    const valor_monto = parseFloat(numero_monto)


    if (isNaN(valor_monto)){
        resultado.textContent = "Por favor ingresa un valor valido";
        return

    }  

    if (valor_monto >= 1000000) {
            
        const comision = valor_monto * porcentaje1 / 100

        resultado.textContent = `El ${porcentaje1}% del monto con valor de ${valor_monto} es: ${comision}. `;

    } else{

        const comision = valor_monto * porcentaje2 / 100

        resultado.textContent = `El ${porcentaje2}% del monto con valor de ${valor_monto} es: ${comision}. `;
    }


}
) 

   
