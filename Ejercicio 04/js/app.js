const matriz = [[4, 2, 5, 1], [2, 6, 4, 8], [9, 2, 1, 3]]

let newMatriz = []

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[0].length; j++) {
    newMatriz.push(matriz[i][j])
  }
}

console.log(newMatriz);

const total = newMatriz.reduce((all, number) => {
  all += number
  return all
}, 0)

const promedio = total / newMatriz.length
console.log(promedio);