const productos = [
    { nombre: "Poción", precio: 50 },
    { nombre: "Varita", precio: 200 },
    { nombre: "Libro", precio: 150 }
];

function calcularSumaPrecios(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

const sumaTotal = calcularSumaPrecios(productos);
console.log("Suma total de los precios:", sumaTotal);
