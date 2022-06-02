//ENTREGABLE Nº2

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");

function saludarConParametros(nom, ape) {
    alert("Buenas noches " + nom + " " + ape);
}

saludarConParametros(nombre, apellido);


function aplicarDescuento(total, porcentajeDescuento) {
    let descuento = (porcentajeDescuento * total) / 100;
    let totalConDescuento = total - descuento;
    return totalConDescuento;
}

let valorTotal = parseInt(prompt("Ingrese el monto total de su compra:"));
let descuentoAAplicar = parseInt(prompt("Ingrese el porcentaje de descuento que posee:"));

let montoFinal = aplicarDescuento(valorTotal, descuentoAAplicar);
alert("El monto final a abonar es $ " + montoFinal);


let numGlobal = 89;


//VOTACION

let a = 0;
let b = 0;

for (let i = 0; i < 10; i++) {

    let nombre = prompt("Ingrese su nombre");
    let voto = prompt("Ingrese su Voto por A o por B").toUpperCase();

    if (voto == "A") {
        console.log(` Este es el voto numero ${i + 1}, el nombre del usuario es ${nombre} y voto al equipo ${voto} `);
        a++;

    } else if (voto == "B") {
        console.log(` Este es el voto numero ${i + 1}, el nombre del usuario es ${nombre} y voto al equipo ${voto} `);
        b++;

    }else {
        console.log(` Este es el voto numero ${i + 1}, el nombre del usuario es ${nombre} y voto es invalido `);
    }
}

if  (a > b) {
    alert(`El ganador es A con ${a} votos `)

}else if (b > a) {
    alert(`El ganador es B con ${b} votos `)

}else {
    alert(`Hubo empate entre los dos equipos con ${b} votos`)
}

const producto = {
  nombre: 'manzana',
  categoria: 'frutas',
  precio: 1.99,
  nutrientes : {
   carbs: 0.95,
   grasas: 0.3,
   proteina: 0.2,
 }
}
console.log(producto);

const prototipoCarrito = {
  productos:[],
  agregarProducto: function(producto){
      this.productos.push(producto);
  },
  obtenerPrecioTotal: function(){}
}

const carrito1 = Object.create(prototipoCarrito);
carrito1.agregarProducto({nombre: 'naranja', precio: 1.25});
carrito1.agregarProducto({nombre: 'limon', precio: 1.75});
console.log(carrito1.obtenerPrecioTotal());

const carrito2 = Object.create(prototipoCarrito);
console.log(carrito2.obtenerPrecioTotal());

var colores =  ["amarillo", "anaranjado", "azul", "rojo", "verde"];
colores.splice(2, 1, "morado", " violeta");
["amarillo", "anaranjado", "morado", " violeta", "rojo", "verde"]
console.log(colores)