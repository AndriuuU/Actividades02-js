function simularDados() {
    const resultados = Array(13).fill(0); // Array para contar los resultados (2 a 12)

    for (let i = 0; i < 36000; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const suma = dado1 + dado2;
        resultados[suma]++;
    }

    resultados.forEach((count, suma) => {
        if (suma >= 2) {
            console.log(`Suma ${suma}: ${count} veces`);
        }
    });
}

simularDados();
