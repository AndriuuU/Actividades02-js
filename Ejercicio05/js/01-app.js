const libros = [
    { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", paginas: 1200 },
    { titulo: "Harry Potter", autor: "J.K. Rowling", paginas: 500 },
    { titulo: "Don Quijote", autor: "Miguel de Cervantes", paginas: 800 }
];

libros.forEach(libro => {
    console.log(`Libro: ${libro.titulo}, Autor: ${libro.autor}, Páginas: ${libro.paginas}`);
});
