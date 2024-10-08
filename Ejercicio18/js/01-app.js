function calcularPrecioFinal(precioBase, descuentos) {
    if (precioBase <= 0 || !Array.isArray(descuentos)) {
        throw new Error("Precio base debe ser un número positivo y descuentos un array.");
    }

    let precioFinal = precioBase;
    descuentos.forEach(descuento => {
        if (descuento < 0 || descuento > 100) {
            throw new Error(`Descuento inválido: ${descuento}`);
        }
        precioFinal -= precioFinal * (descuento / 100);
    });

    return precioFinal;
}

function mostrarPrecioFinal(precioBase, descuentos) {
    try {
        const precioFinal = calcularPrecioFinal(precioBase, descuentos);
        console.log(`El precio final después de aplicar los descuentos es: ${precioFinal.toFixed(2)}`);
    } catch (error) {
        console.error(error.message);
    }
}

mostrarPrecioFinal(1000, [10, 20, 5]);
