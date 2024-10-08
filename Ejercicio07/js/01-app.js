class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    hablar() {
        console.log(`${this.nombre} dice: ¡Guau!`);
    }
}

class Gato extends Animal {
    hablar() {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }
}

const perro = new Perro("Firulais", 3);
const gato = new Gato("Misu", 2);

perro.hablar();
gato.hablar();
