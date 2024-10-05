function calcularSumaPrecios(array) {
  const suma = array.reduce((sum, objeto) => {
    if (objeto.precio > 0) {
      sum += objeto.precio
    }
    return sum
  }, 0)

  return suma
}

const suma = calcularSumaPrecios([{ nombre: "Objeto1", precio: 50 }, { nombre: "Objeto2", precio: 20 }, { nombre: "Objeto3", precio: 15 }, { nombre: "Objeto4", precio: 32 }])
console.log(suma);