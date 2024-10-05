function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function mostrarAniosBisiestos(inicio, fin) {
  if (inicio < 2001 || inicio > 2500 || fin < 2001 || fin > 2500) {
    console.log("Los años deben estar entre 2001 y 2500.");
    return;
  }

  if (inicio > fin) {
    console.log("El año de inicio no puede ser mayor que el año de fin.");
    return;
  }

  let aniosBisiestos = [];

  for (let year = inicio; year <= fin; year++) {
    if (isLeapYear(year)) {
      aniosBisiestos.push(year);
    }
  }

  if (aniosBisiestos.length > 0) {
    console.log("Años bisiestos entre " + inicio + " y " + fin + ":");
    console.log(aniosBisiestos.join(", "));
  } else {
    console.log("No hay años bisiestos en este rango.");
  }
}
mostrarAniosBisiestos(2020, 2040);
