class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = [];
    }

    agregarNota(nota) {
        this.notas.push(nota);
    }

    calcularPromedio() {
        const suma = this.notas.reduce((acum, nota) => acum + nota, 0);
        return suma / this.notas.length;
    }

    haAprobado() {
        return this.calcularPromedio() >= 6;
    }
}

const estudiante = new Estudiante("Juan", 20);
estudiante.agregarNota(7);
estudiante.agregarNota(8);
estudiante.agregarNota(9);

console.log(`Promedio: ${estudiante.calcularPromedio()}`);
console.log(`¿Ha aprobado? ${estudiante.haAprobado() ? "Sí" : "No"}`);
