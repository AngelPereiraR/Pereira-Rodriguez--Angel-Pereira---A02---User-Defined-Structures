let accionJuego = 0

const personajes = [
  {
    nombre: "Juan",
    raza: "Humano",
    nivel: 1,
    vida: 100,
    atacar: function atacar(enemigo) {
      if (enemigo.vida > 0) {
        enemigo.vida -= 10;
        alert(`${this.nombre} ataca a ${enemigo.nombre} y le quita 10 puntos de vida.`);
        if (enemigo.vida <= 0) {
          enemigo.vida = 0;
          this.subir(enemigo);
        }
      } else {
        alert(`${enemigo.nombre} ya ha sido derrotado.`);
      }
    },
    recuperarVida: function recuperarVida() {
      if (this.vida < 100) {
        this.vida += 20;
        if (this.vida > 100) {
          this.vida = 100;
        }
        alert(`${this.nombre} recupera vida. Puntos de vida actuales: ${this.vida}.`);
      } else {
        alert(`${this.nombre} ya tiene la vida al máximo.`);
      }
    },
    subir: function subirNivel(enemigo) {
      alert(`${enemigo.nombre} ha sido derrotado.`);
      this.nivel += 1;
      enemigo.nivel = 1;
      enemigo.vida = 100;
      alert(`${enemigo.nombre} ha sido restablecido a nivel 1 con 100 puntos de vida.`);
    }
  },
  {
    nombre: "Legolas",
    raza: "Elfo",
    nivel: 1,
    vida: 100,
    atacar: function atacar(enemigo) {
      if (enemigo.vida > 0) {
        enemigo.vida -= 10;
        alert(`${this.nombre} ataca a ${enemigo.nombre} y le quita 10 puntos de vida.`);
        if (enemigo.vida <= 0) {
          enemigo.vida = 0;
          this.subir(enemigo);
        }
      } else {
        alert(`${enemigo.nombre} ya ha sido derrotado.`);
      }
    },
    recuperarVida: function recuperarVida() {
      if (this.vida < 100) {
        this.vida += 20;
        if (this.vida > 100) {
          this.vida = 100;
        }
        alert(`${this.nombre} recupera vida. Puntos de vida actuales: ${this.vida}.`);
      } else {
        alert(`${this.nombre} ya tiene la vida al máximo.`);
      }
    },
    subir: function subirNivel(enemigo) {
      alert(`${enemigo.nombre} ha sido derrotado.`);
      this.nivel += 1;
      enemigo.nivel = 1;
      enemigo.vida = 100;
      alert(`${this.nombre} ha subido a nivel ${this.nivel}`);
      alert(`${enemigo.nombre} ha sido restablecido a nivel 1 con 100 puntos de vida.`);
    }
  }]

while (accionJuego != 2) {
  accionJuego = prompt("------------ Menú --------------\n(1) Seleccionar personaje.\n(2) Salir del juego.\nIntroduce la acción a realizar: (1 o 2)");

  if (accionJuego > 0 && accionJuego <= 2) {
    if (accionJuego == 1) {
      let menu = "------------ Menú --------------\n".split("\n")
      menu.pop()
      for (let i = 0; i < personajes.length; i++) {
        menu.push(`\n(${i + 1}) ${personajes[i].nombre}.`)
      }
      menu.push(`\nEscoge personaje: (1 a ${personajes.length})`)
      let numeroPersonaje = 0
      while (numeroPersonaje <= 0 || numeroPersonaje > personajes.length || parseInt(numeroPersonaje) == 0) {
        numeroPersonaje = prompt(menu.join(''))
      }
      let accion = 0
      while (accion < 1 || accion >= personajes.length) {
        accion = prompt("------------ Menú --------------\n(1) Atacar.\n(2) Recuperar vida.")
        if (accion == 1) {
          let menu = "------------ Menú --------------\n".split("\n")
          menu.pop()
          for (let i = 0; i < personajes.length; i++) {
            menu.push(`\n(${i + 1}) ${personajes[i].nombre}.`)
          }
          menu.push(`\nEscoge enemigo: (1 a ${personajes.length})`)

          let numeroEnemigo = 0
          while (numeroEnemigo <= 0 || numeroEnemigo > personajes.length || parseInt(numeroEnemigo) == 0) {
            numeroEnemigo = prompt(menu.join(''))
          }
          personajes[numeroPersonaje - 1].atacar(personajes[numeroEnemigo - 1])
        } else if (accion == 2) {
          personajes[numeroPersonaje - 1].recuperarVida()
        }
      }

    } else {
      alert("Saliendo del juego...")
    }
  } else {
    alert("No se ha introducido una acción correcta.")
  }
}