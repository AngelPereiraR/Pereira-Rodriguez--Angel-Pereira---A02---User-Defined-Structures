// Función que verifica si un año es bisiesto
function isLeapYear(year) {
  // Un año es bisiesto si es divisible por 4, pero no por 100, o si es divisible por 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Función que muestra todos los años bisiestos en un rango dado entre 2001 y 2500
function mostrarAniosBisiestos(inicio, fin) {
  // Validación: El año de inicio debe estar entre 2001 y 2500
  // Validación: El año de fin también debe estar entre 2001 y 2500
  if (inicio < 2001 || inicio > 2500 || fin < 2001 || fin > 2500) {
    console.log("Los años deben estar entre 2001 y 2500.");
    return;
  }

  // Validación: El año de inicio no puede ser mayor que el año de fin
  if (inicio > fin) {
    console.log("El año de inicio no puede ser mayor que el año de fin.");
    return;
  }

  // Crear un array para almacenar los años bisiestos encontrados
  let aniosBisiestos = [];

  // Iterar a través de todos los años en el rango
  for (let year = inicio; year <= fin; year++) {
    // Si el año es bisiesto, lo agregamos al array
    if (isLeapYear(year)) {
      aniosBisiestos.push(year);
    }
  }

  // Mostrar el resultado: Si se encontraron años bisiestos, los mostramos
  if (aniosBisiestos.length > 0) {
    console.log("Años bisiestos entre " + inicio + " y " + fin + ":");
    console.log(aniosBisiestos.join(", "));
  }
  // Si no se encontraron años bisiestos en el rango, mostramos un mensaje indicativo
  else {
    console.log("No hay años bisiestos en este rango.");
  }
}

// ---- Pruebas ----

// Caso 1: Rango válido con años bisiestos
console.log("Caso 1: Rango válido con años bisiestos (2020-2040)");
mostrarAniosBisiestos(2020, 2040);
// Resultado esperado: 2020, 2024, 2028, 2032, 2036, 2040

// Caso 2: Rango sin años bisiestos (2101-2105)
console.log("\nCaso 2: Rango sin años bisiestos (2101-2105)");
mostrarAniosBisiestos(2101, 2105);
// Resultado esperado: No hay años bisiestos en este rango

// Caso 3: Rango en el límite inferior (2001-2003)
console.log("\nCaso 3: Rango en el límite inferior (2001-2003)");
mostrarAniosBisiestos(2001, 2003);
// Resultado esperado: No hay años bisiestos en este rango

// Caso 4: Rango con entrada inválida (1999-2005)
console.log("\nCaso 4: Rango con entrada inválida (1999-2005)");
mostrarAniosBisiestos(1999, 2005);
// Resultado esperado: Los años deben estar entre 2001 y 2500

// Caso 5: Rango donde el año de inicio es mayor que el año de fin (2050-2040)
console.log("\nCaso 5: Año de inicio mayor que año de fin (2050-2040)");
mostrarAniosBisiestos(2050, 2040);
// Resultado esperado: El año de inicio no puede ser mayor que el año de fin

// Caso 6: Rango válido con muchos años bisiestos (2400-2500)
console.log("\nCaso 6: Rango válido con muchos años bisiestos (2400-2500)");
mostrarAniosBisiestos(2400, 2500);
// Resultado esperado: 2400, 2404, 2408, 2412, ..., 2496
