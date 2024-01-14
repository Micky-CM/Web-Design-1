class Hamburguesa {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Pedido {
  constructor() {
    this.hamburguesas = [];
  }

  agregarHamburguesa(hamburguesa) {
    this.hamburguesas.push(hamburguesa);
  }

  calcularTotal() {
    let total = 0;

    for (let i = 0; i < this.hamburguesas.length; i++) {
      total += this.hamburguesas[i].precio;
    }
    return total
  }
}

const hamburguesa1 = new Hamburguesa("Hamburguesa Simple", 5.99);
const hamburguesa2 = new Hamburguesa("Hamburguesa Doble", 8.99);
const hamburguesa3 = new Hamburguesa("Hamburguesa con Queso", 7.49);

const pedido = new Pedido();
pedido.agregarHamburguesa(hamburguesa1);
pedido.agregarHamburguesa(hamburguesa2);

const total = pedido.calcularTotal();

console.log("Detalle de Compra")
console.log("-------------------------")
console.log("Pedido:")
console.log(hamburguesa1.nombre + " " + hamburguesa1.precio)
console.log(hamburguesa2.nombre + " " + hamburguesa2.precio)
console.log("Total a pagar: $" + total.toFixed(2));
console.log("=========================")