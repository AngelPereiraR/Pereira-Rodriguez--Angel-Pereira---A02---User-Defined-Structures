function calcularPrecioFinal(precioBase, descuentos) {
  if (precioBase > 0) {
    for (let i = 0; i < descuentos.length; i++) {
      if (descuentos[i] >= 0 || descuentos[i] <= 100) {
        precioBase -= (precioBase * (descuentos[i] / 100))
      } else {
        throw Error("Los descuentos tienen que estar en el rango de 0 a 100.")
      }
    }
  } else {
    throw Error("El precio base debe ser un número positivo.")
  }
  return precioBase
}

function mostrarPrecioFinal(precioBase, descuentos) {
  try {
    const precioFinal = calcularPrecioFinal(precioBase, descuentos)
    console.log(`El precio final después de aplicar los descuentos es: ${precioFinal}`);
  } catch (error) {
    console.log(error.message);
  }
}

mostrarPrecioFinal(100, [10, 20])
mostrarPrecioFinal(100, ["a", 20])
mostrarPrecioFinal("a", [10, 20])