function obtenerDiasDelMes(mes) {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes < 1 || mes > 12) {
        console.log("Por favor, introduce un número válido entre 1 y 12.");
        return;
    }

    console.log(`El mes ${mes} tiene ${diasPorMes[mes - 1]} días.`);
}

const mes = 2; // Cambia el número para probar diferentes meses
obtenerDiasDelMes(mes);
