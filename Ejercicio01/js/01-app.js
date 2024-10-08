function sumarNumeros(num1, num2) {
    const suma = num1 + num2;

    // Usando funciones predefinidas:
    const numeroAleatorio = Math.random(); // Genera un número aleatorio
    const sumaRedondeada = suma.toFixed(2); // Redondea la suma a 2 decimales
    const enteroAleatorio = parseInt(numeroAleatorio * 100); // Convierte el número aleatorio a entero

    console.log(`Suma: ${sumaRedondeada}`);
    console.log(`Número aleatorio entre 0 y 100: ${enteroAleatorio}`);
    
    return suma;
}

sumarNumeros(10.456, 5.789);