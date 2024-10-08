function rot13(str) {
    return str.replace(/[A-Za-z]/g, (c) => {
        return String.fromCharCode(
            c.charCodeAt(0) + (c.toUpperCase() <= "M" ? 13 : -13)
        );
    });
}

const entrada = "Uryyb Jbeyq"; // "Hello World" en ROT13
const decodificado = rot13(entrada);
console.log("Cadena decodificada:", decodificado);
