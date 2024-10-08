const numeros = [10, 15, 20, 25, 30];

const filtrados = numeros.filter(num => num > 20);
console.log("Filtrados (mayores de 20):", filtrados);

const sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Suma total:", sumaTotal);

const multiplicados = numeros.map(num => num * 2);
console.log("Multiplicados por 2:", multiplicados);