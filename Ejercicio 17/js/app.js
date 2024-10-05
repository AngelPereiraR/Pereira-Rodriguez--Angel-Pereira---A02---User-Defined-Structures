class Producto {

  constructor(nombre, categoria, precio) {
    this.nombre = nombre
    this.categoria = categoria
    if (precio >= 0) {
      this.precio = precio
    } else {
      throw Error("El precio no es válido")
    }
    this.stock = 0
  }

  actualizarStock(cantidad) {
    if (cantidad >= 0 || cantidad < 0) {
      if (this.stock += cantidad < 0) {
        this.stock = 0
      } else {
        this.stock += cantidad
      }
    } else {
      throw Error("La cantidad no es válida")
    }
  }
}

class Inventario {

  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto)
  }

  eliminarProducto(nombre) {
    this.productos = this.productos.filter((producto) => producto.nombre != nombre)
  }

  buscarProducto(nombre) {
    const producto = this.productos.find((producto) => producto.nombre == nombre)
    return `Nombre: ${producto.nombre}. Categoría: ${producto.categoria}. Precio: ${producto.precio}€. Stock: ${producto.stock}.`
  }
}


const pocion = new Producto('Poción Curativa', 'Poción', 25);
const varita = new Producto('Varita de Roble', 'Varita', 150);
const libro = new Producto('Libro de Hechizos', 'Libro', 50);

const inventario = new Inventario();

inventario.agregarProducto(pocion);
inventario.agregarProducto(varita);
inventario.agregarProducto(libro);

pocion.actualizarStock(10);

inventario.eliminarProducto('Poción Curativa')
inventario.agregarProducto(pocion)

console.log(inventario.buscarProducto('Poción Curativa'));

inventario.eliminarProducto('Libro de Hechizos');

try {
  console.log(inventario.buscarProducto('Libro de Hechizos'));
} catch (error) {
  console.log(error.message);
}