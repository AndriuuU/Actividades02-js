class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = 0;
    }

    actualizarStock(cantidad) {
        this.stock = Math.max(0, this.stock + cantidad);
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(nombre) {
        this.productos = this.productos.filter(p => p.nombre !== nombre);
    }

    buscarProducto(nombre) {
        return this.productos.find(p => p.nombre === nombre);
    }

    mostrarInventario() {
        this.productos.forEach(producto => {
            console.log(`Producto: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: ${producto.precio}, Stock: ${producto.stock}`);
        });
    }
}

const inventario = new Inventario();
inventario.agregarProducto(new Producto("Poción", "Poción", 50));
inventario.agregarProducto(new Producto("Varita", "Varita", 200));

inventario.mostrarInventario();
