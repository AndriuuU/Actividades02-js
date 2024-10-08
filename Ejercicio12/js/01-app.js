function findPairs(inicio, fin) {
    if (inicio < 1 || fin > 100 || inicio > fin) {
        console.log("Por favor, introduce un rango válido (entre 1 y 100).");
        return;
    }

    const pares = [];
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    console.log(`Números pares entre ${inicio} y ${fin}:`, pares);
}

findPairs(10, 20);
