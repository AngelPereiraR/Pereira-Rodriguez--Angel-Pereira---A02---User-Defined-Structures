const numbers = [2, 7, 4, 9, 5, 3, 10, 6]

const filtered = numbers.filter(number => number > 5)
const reduced = numbers.reduce((sum, number) => {
  if (number > 5) {
    sum += number
  }
  return sum
}, 0)
const recolected = numbers.map(number => number > 5)

console.log(filtered);
console.log(reduced);
console.log(recolected);