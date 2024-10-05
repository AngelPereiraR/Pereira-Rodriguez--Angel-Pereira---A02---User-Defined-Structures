function definidasYPredifinidas(num1, num2) {
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  if (num1 >= 0 || num1 < 0 || num2 >= 0 || num2 < 0) {
    console.log("Los parámetros introducidos son incorrectos");
  } else {
    const num3 = (Math.random() * 10).toFixed()
    console.log(num1 + num2);
    console.log(num3);
  }

}

definidasYPredifinidas("a10", 20)