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
const poleras = [];
const jeans = [];
const tapados = [];

//Cargo el stock de productos segun su categoria
//POLERA
poleras.push(new Producto("Polera cuello redondo", 1, 2000, "Negro", 30));
poleras.push(new Producto("Polera cuello medio", 2, 1400, "Beige", 10));
poleras.push(new Producto("Polera cuello alto", 3, 1400, "Blanco", 20));
poleras.push(new Producto("Polera cuello Alto", 4, 1400, "Marron", 15));
//JEANS
jeans.push(new Producto("Jeans", 5, 4000, "Negro", 20));
jeans.push(new Producto("Jeans Engomado", 6, 3800, "Negro", 40));
jeans.push(new Producto("Jeans Tiro alto", 7, 3800, "Celeste", 40));
//CHAQUETA
tapados.push(new Producto("Tapado de Paño", 8, 8500, "Negro", 10));
tapados.push(new Producto("Tapado de Paño", 9, 8500, "Marron", 10));
tapados.push(new Producto("Tapado de Paño", 10, 9500, "Gris", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const poleras of poleras) {
    alert("ID (" + poleras.id + ") - " + poleras.nombre);
}
for (const jeans of jeans) {
    alert("ID (" + jeans.id + ") - " + jeans.nombre);
}
for (const tapados of tapados) {
    alert("ID (" + tapados.id + ") - " + tapados.nombre);
}

//Solicito al usuario el ID de la prenda
let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const poleraBuscada = poleras.find(polera => polera.id === prendaSeleccionada);
const jeansBuscado = jeans.find(jeans => jeans.id == prendaSeleccionada);
const tapadoBuscado = tapados.find(tapado => tapado.id == prendaSeleccionada);

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
