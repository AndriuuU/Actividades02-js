function filtrarYTransformar(numeros) {
    return numeros.filter(num => num % 2 !== 0).map(num => num * 2);
}

const resultado = filtrarYTransformar([1, 2, 3, 4, 5, 6, 7]);
console.log("Resultado:", resultado);
