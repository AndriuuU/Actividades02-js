class Personaje {
    constructor(nombre, raza) {
        this.nombre = nombre;
        this.raza = raza;
        this.nivel = 1;
        this.puntosDeVida = 100;
    }

    atacar(enemigo) {
        enemigo.puntosDeVida -= 10;
        if (enemigo.puntosDeVida <= 0) {
            enemigo.puntosDeVida = 0;
            console.log(`${enemigo.nombre} ha sido derrotado.`);
            enemigo.nivel = 1;
            enemigo.puntosDeVida = 100;
        }
    }

    recuperarVida() {
        this.puntosDeVida += 20;
        if (this.puntosDeVida > 100) {
            this.puntosDeVida = 100;
        }
    }
}

const personajes = [
    new Personaje("Aragorn", "Humano"),
    new Personaje("Legolas", "Elfo")
];

// Simulación de combate
personajes[0].atacar(personajes[1]);
console.log(personajes[1]);
personajes[1].recuperarVida();
console.log(personajes[1]);
