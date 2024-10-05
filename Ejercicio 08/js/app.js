class Estudiante {
  constructor(nombre, edad, notas) {
    this.nombre = nombre
    this.edad = edad
    this.notas = notas
  }

  añadirNota(nota) {
    if (nota >= 0 || nota < 0) {
      this.notas.push(parseFloat(nota))
    } else {
      console.log("No se ha podido añadir la nota. No es un número");
    }
  }

  promedio() {
    let total = 0
    let noNumerosContador = 0
    for (let i = 0; i < this.notas.length; i++) {
      if (this.notas[i] >= 0 || this.notas[i] < 0) {
        total += parseFloat(this.notas[i])
      } else {
        noNumerosContador++
      }
    }
    return total / (this.notas.length - noNumerosContador)
  }

  estaAprobado() {
    if (this.promedio() >= 5) {
      return `El estudiante ${this.nombre} ha aprobado`
    } else {
      return `El estudiante ${this.nombre} ha suspendido`
    }
  }
}

const estudiante = new Estudiante("Ángel", 21, ["a", 7, 2, 7, 4])
estudiante.añadirNota(7)
estudiante.añadirNota("a")
estudiante.añadirNota(6)
console.log(estudiante.estaAprobado());