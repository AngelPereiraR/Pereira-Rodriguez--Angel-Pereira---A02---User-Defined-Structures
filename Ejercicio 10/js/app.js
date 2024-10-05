function diasMes() {
  const mes = prompt("Introduce un mes del año (Número del 1 al 12)")

  if (mes >= 1 || mes < 12) {
    if (mes == 2) {
      return 28
    } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
      return 30
    } else {
      return 31
    }
  } else {
    console.log("El valor introducido no es válido");
    return 0
  }
}

const dias = diasMes()
console.log(`El mes introducido tiene ${dias} días`);