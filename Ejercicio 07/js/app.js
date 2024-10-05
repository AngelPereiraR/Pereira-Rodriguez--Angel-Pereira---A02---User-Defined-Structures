class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  hablar() {
    return "Hola"
  }
}

class Perro extends Animal {
  hablar() {
    return "Woof"
  }
}

class Gato extends Animal {
  hablar() {
    return "Meow"
  }
}

const perro = new Perro("Raúl", 10)
const gato = new Gato("Garfield", 3)
console.log(gato.hablar());
console.log(perro.hablar());