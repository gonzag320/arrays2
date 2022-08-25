//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const polera = [];
const jeans = [];
const tapado = [];

//Cargo el stock de productos segun su categoria
//POLERA
polera.push(new Producto("Polera cuello redondo", 1, 2000, "Negro", 30));
polera.push(new Producto("Polera cuello medio", 2, 1400, "Beige", 10));
polera.push(new Producto("Polera cuello alto", 3, 1400, "Blanco", 20));
polera.push(new Producto("Polera cuello Alto", 4, 1400, "Marron", 15));
//JEANS
jeans.push(new Producto("Jeans", 5, 4000, "Negro", 20));
jeans.push(new Producto("Jeans Engomado", 6, 3800, "Negro", 40));
jeans.push(new Producto("Jeans Tiro alto", 7, 3800, "Celeste", 40));
//CHAQUETA
tapado.push(new Producto("Tapado de Paño", 8, 8500, "Negro", 10));
tapado.push(new Producto("Tapado de Paño", 9, 8500, "Marron", 10));
tapado.push(new Producto("Tapado de Paño", 10, 9500, "Gris", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const polera of poleras) {
    alert("ID (" + polera.id + ") - " + polera.nombre);
}
for (const jeans of jeans) {
    alert("ID (" + jeans.id + ") - " + jeans.nombre);
}
for (const tapado of tapados) {
    alert("ID (" + tapado.id + ") - " + tapado.nombre);
}

//Solicito al usuario el ID de la prenda
let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const poleraBuscada = polera.find(polera => polera.id === prendaSeleccionada);
const jeansBuscado = jeans.find(jeans => jeans.id == prendaSeleccionada);
const tapadoBuscado = tapado.find(tapado => tapado.id == prendaSeleccionada);

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <=4) {
    alert("Seleccionaste " +  poleraBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (prendaSeleccionada <=7) {
    alert("Seleccionaste " + jeansBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (prendaSeleccionada <= 10) {
    alert("Seleccionaste " + tapadoBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}
