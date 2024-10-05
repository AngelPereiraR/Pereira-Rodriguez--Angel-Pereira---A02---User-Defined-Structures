function filtrarYTransformar(arrayNumeros) {
  const impares = arrayNumeros.filter(numero => numero % 2 == 1)
  const duplicados = impares.map(numero => numero * 2)
  return duplicados
}

console.log(filtrarYTransformar([3, 5, 2, 6, 2, 7, 4, 9]));