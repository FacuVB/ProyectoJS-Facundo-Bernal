//DESAFIO 1

/* let numero1 = prompt("Ingresá un número");
let numero2 = prompt("Ingresá otro número");

let suma = parseInt(numero1) + parseInt(numero2);
let resta = parseInt(numero1) - parseInt(numero2);
let multiplicacion = parseInt(numero1) * parseInt(numero2);
let division = parseInt(numero1) / parseInt(numero2);
let resto = parseInt(numero1) % parseInt(numero2);

alert("El resultado de la suma es " + suma);
alert("El resultado de la resta es " + resta);
alert("El resultado de la multiplicacion es " + multiplicacion);
alert("El resultado de la division es " + division);
alert("El resultado del resto es " + resto);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(resto); */


//===================================================================//

//DESAFIO 2

/* alert("El nombre de usuario es: coder");
alert("La contraseña es javascript2021");

let user = prompt("Por favor ingrese su nombre de ususario");

if (user == "CODER" || user == "coder") {
    let pass = prompt("Por favor ingrese su contraseña");
    if (pass === "javascript2021") {
        alert("Bienvenido");
    } else if (pass == "") {
        alert("No ingreso ninguna contraseña");
    } else {
        alert("Contraseña incorrecta");
    }
} else if (user == "") {
    alert("No ingreso ningun nombre de usuario");
} else {
    alert("Usuario incorrecto");
} */


//===================================================================//


//DESAFIO 3

/* El siguiente algoritmo simula el acumulador de un carrito de compras. 
El usuario podra ingresar 2 valores posibles, Vinilos o CD. 
Al finalizar el programa, el mismo arrojara la cantidad de veces que se selecciono cada item y el total de unidades") */

/* let items;
let cantidadVinilo = 0;
let cantidadCd = 0;
let total = cantidadVinilo + cantidadCd;
do {
    items = prompt("Que formato vas a llevar, Vinilo o Cd");
    if (items.toLocaleLowerCase() == "vinilo") {
        cantidadVinilo++;
    } else if (items.toLocaleLowerCase() == "cd") {
        cantidadCd++;
    } else {
        alert("El formato no es correcto")
    }

} while (confirm("Vas a llevar algo mas"));

alert(`Llevas ${cantidadVinilo} vinilo/s`);
alert(`Llevas ${cantidadCd} cd/s`);
alert(`La cantidad total es de ${cantidadCd + cantidadVinilo} unidades`) */

//===================================================================//


//DESAFIO 4


/* const subtotal = (a, b) => a * b;
const cd = 6500;
const vinilo = 12650;
const sumar = (subtotalVinilos, subtotalCd) => subtotalVinilos + subtotalCd;
let items;
let cantidadVinilo = 0;
let cantidadCd = 0;

function carrito() {

    do {
        items = prompt("Que formato vas a llevar, Vinilo o Cd");
        if (items.toLocaleLowerCase() == "vinilo") {
            cantidadVinilo++;
        } else if (items.toLocaleLowerCase() == "cd") {
            cantidadCd++;
        } else {
            alert("El formato no es correcto")
        }

    } while (confirm("Vas a llevar algo mas"));

    alert(`Llevas ${cantidadVinilo} vinilo/s`);
    alert(`Llevas ${cantidadCd} cd/s`);

    let subtotalVinilos = subtotal(cantidadVinilo, vinilo);
    alert(`El precio por la compra de ${cantidadVinilo} vinilo/s es de $${subtotalVinilos}`)
    let subtotalCd = subtotal(cantidadCd, cd);
    alert(`El precio por la compra de ${cantidadCd} cd/s es de $${subtotalCd}`)
    let precioFinal = sumar(subtotalVinilos, subtotalCd)
    alert(`El precio final de la compra es de ${precioFinal}`)
}

carrito(); */

//===================================================================//


//DESAFIO 5

class producto {
    constructor(formato, precio, cantidad) {
        this.formato = formato,
            this.precio = precio,
            this.cantidad = cantidad
    }
    cantidadItems() {
        alert("Llevas " + this.cantidad + " CD/s")
    }

    iva() {
        this.precio = this.precio * 1.21;
    }

    totalCompra() {
        alert("El total de la compra es de " + this.precio * this.cantidad)
    }

    pagoCuotas() {
        let cuota = prompt("En cuantas cuotas vas a pagar: 1, 3, 6 o 12")

        if (cuota == 1) {
            alert("El monto a pagar en 1 cuota es de " + this.precio * this.cantidad);
        } else if (cuota == 3) {
            alert("El monto a pagar en 3 cuotas es de " + parseInt((this.precio * this.cantidad) / 3));
        } else if (cuota == 6) {
            alert("El monto a pagar en 6 cuotas es de " + parseInt((this.precio * this.cantidad) / 6));
        } else if (cuota == 12) {
            alert("El monto a pagar en 12 cuotas es de " + parseInt((this.precio * this.cantidad) / 12));
        } else {
            alert("Esa opcion no esta disponible")
        }
    }
}

let cantidad = prompt("Cuantos Cd/s vas a llevar")

const producto1 = new producto("CD", 6500, cantidad);


producto1.cantidadItems();
producto1.iva();
producto1.totalCompra();
producto1.pagoCuotas();