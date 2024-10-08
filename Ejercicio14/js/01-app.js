function isLeapYear(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

function mostrarAniosBisiestos(inicio, fin) {
    if (inicio < 2001 || fin > 2500 || inicio > fin) {
        console.log("Por favor, introduce un rango válido (entre 2001 y 2500).");
        return;
    }

    const bisiestos = [];
    for (let i = inicio; i <= fin; i++) {
        if (isLeapYear(i)) {
            bisiestos.push(i);
        }
    }

    console.log(`Años bisiestos entre ${inicio} y ${fin}:`, bisiestos);
}

mostrarAniosBisiestos(2001, 2024);
