const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function aplanarMatriz(matriz) {
    return matriz.reduce((acum, fila) => acum.concat(fila), []);
}

function promedioMatriz(matriz) {
    const elementos = aplanarMatriz(matriz);
    const suma = elementos.reduce((acum, num) => acum + num, 0);
    return suma / elementos.length;
}

const matrizAplanada = aplanarMatriz(matriz);
console.log("Matriz aplanada:", matrizAplanada);
console.log("Promedio de la matriz:", promedioMatriz(matriz));
