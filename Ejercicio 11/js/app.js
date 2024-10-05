function lanzarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

function simularLanzamientos() {
  let resultados = Array(11).fill(0);

  for (let i = 0; i < 36000; i++) {
    let dado1 = lanzarDados();
    let dado2 = lanzarDados();
    let suma = dado1 + dado2;

    resultados[suma - 2]++;
  }

  return resultados;
}

function mostrarResultados(resultados) {
  console.log("Suma de los dados | Ocurrencias");
  console.log("------------------|------------");

  for (let i = 0; i < resultados.length; i++) {
    if (i + 2 >= 10) {
      console.log(`${i + 2}                | ${resultados[i]}`);
    } else {
      console.log(`${i + 2}                 | ${resultados[i]}`);
    }
  }
}

let resultados = simularLanzamientos();
mostrarResultados(resultados);
