function recursiva(n) {
  if (n > 0) {
    console.log("bauuuba");
    n--
    if (n > 0) {
      recursiva(n)
    }
  } else {
    console.log("Se ha introducido un valor no válido");
  }
}

recursiva(4)