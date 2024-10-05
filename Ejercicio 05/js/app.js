const Libro = {
  título: "Título del libro",
  autor: "Autor del libro",
  paginas: 50,
  resumen: function () {
    return `El libro ${this.título}, creado por ${this.autor} tiene ${this.paginas} páginas`
  }
}

const arrayLibros = [Libro, Libro, Libro, Libro]

for (const libro of arrayLibros) {
  console.log(libro.resumen());
}