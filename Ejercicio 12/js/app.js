function findPairs(number1, number2) {
  if (number1 >= 1 && number1 <= 100 && number2 >= 0 && number2 <= 100) {
    let pairs = []
    for (number1; number1 <= number2; number1++) {
      if (number1 % 2 == 0) {
        pairs.push(number1)
      }
    }
    console.log(pairs);
  } else {
    console.log("Los valores introducidos no se encuentran en el rango 1-100");
  }
}

findPairs(1, 30)
findPairs("a", 40)
findPairs(100, 200)
findPairs(31, 78)