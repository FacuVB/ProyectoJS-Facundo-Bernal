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

/*class producto {
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
producto1.pagoCuotas();*/

//===================================================================//

//DESAFIO 6

let listaProductos = [{
        id: 1,
        artist: "The Rolling Stones",
        album: "Blue & Lenoseme",
        genre: "Rock",
        year: 2016,
        format: "Cd",
        price: 12650,
    },
    {
        id: 2,
        artist: "The Beatles",
        album: "Abbey Road Anniversary",
        genre: "Rock",
        year: 2019,
        format: "Vinilo",
        price: 12650,
    },
    {
        id: 3,
        artist: "The Killers",
        album: "Pressure Machine",
        genre: "Rock",
        year: 2021,
        format: "Cd",
        price: 3000,
    },
    {
        id: 4,
        artist: "Cerati",
        album: "Fuerza Natural",
        genre: "Rock Nacional",
        year: 2009,
        format: "Cd",
        price: 6250,
    },
    {
        id: 5,
        artist: "Ciro y los persas",
        album: "Guerras (Un viaje en el tiempo)",
        genre: "Rock Nacional",
        year: 2020,
        format: "Cd",
        price: 4999,
    },
    {
        id: 6,
        artist: "Divididos",
        album: "Haciendo cosas raras",
        genre: "Rock Nacional",
        year: 2018,
        format: "Cd",
        price: 3400,
    },
    {
        id: 7,
        artist: "The Beatles",
        album: "Abbey Road Anniversary",
        genre: "Rock",
        year: 2019,
        format: "Vinilo",
        price: 12650,
    },
    {
        id: 8,
        artist: "ACDC",
        album: "Live River Plate 2009",
        genre: "Rock",
        year: 2011,
        format: "CD",
        price: 2360,
    },
    {
        id: 9,
        artist: "Metallica",
        album: "S&M2",
        genre: "Rock",
        year: 2020,
        format: "Cd",
        price: 3077,
    },
    {
        id: 10,
        artist: "Evanescence",
        album: " The Bitter Truth",
        genre: "Rock",
        year: 2021,
        format: "Cd",
        price: 8750,
    },
    {
        id: 11,
        artist: "Avicii",
        album: "True",
        genre: "EDM",
        year: 2013,
        format: "Cd",
        price: 4310,
    },
    {
        id: 12,
        artist: "Marshmello",
        album: " Shockwave",
        genre: "EDM",
        year: 2021,
        format: "Cd",
        price: 4550,
    },
    {
        id: 13,
        artist: "Steve Aoki",
        album: "Neon Future IV",
        genre: "EDM",
        year: 2020,
        format: "Cd",
        price: 1600,
    },
    {
        id: 14,
        artist: "Drake",
        album: "Certified Lover Boy",
        genre: "Hip Hop",
        year: 2021,
        format: "Cd",
        price: 2990,
    },
    {
        id: 15,
        artist: "Doja Cat",
        album: "Planet Her",
        genre: "Hip Hop",
        year: 2021,
        format: "Cd",
        price: 3450,
    },
    {
        id: 16,
        artist: "Megan Thee Stallion",
        album: "Good News",
        genre: "Hip Hop",
        year: 2020,
        format: "Cd",
        price: 3250,
    },
    {
        id: 17,
        artist: "Maria Becerra",
        album: "Animal",
        genre: "Latin",
        year: 2021,
        format: "Cd",
        price: 5400,
    },
    {
        id: 18,
        artist: "Bad Bunny",
        album: "El ultimo tour del mundo",
        genre: "Latin",
        year: 2019,
        format: "Cd",
        price: 3600,
    },
    {
        id: 19,
        artist: "J Balvin",
        album: "Summer Vacation",
        genre: "latin",
        year: 2020,
        format: "Cd",
        price: 4300,
    },
    {
        id: 20,
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        genre: "Pop",
        year: 2020,
        format: "Vinilo",
        price: 12650,
    },
    {
        id: 21,
        artist: "Ariana Grande",
        album: " My Everything",
        genre: "Pop",
        year: 2014,
        format: "Vinilo",
        price: 12650,
    },
    {
        id: 22,
        artist: "Olivia Rodrigo",
        album: "Sour",
        genre: "Pop",
        year: 2021,
        format: "Cd",
        price: 4050,
    },
    {
        id: 23,
        artist: "Blackpink",
        album: "The Album",
        genre: "Kpop",
        year: 2020,
        format: "Cd",
        price: 7990,
    },
    {
        id: 24,
        artist: "BTS",
        album: "Butter",
        genre: "Kpop",
        year: 2021,
        format: "Cd",
        price: 6990,
    },
    {
        id: 25,
        artist: "TXT",
        album: "The chaos chapter: Fight or Escape",
        genre: "Kpop",
        year: 2021,
        format: "Cd",
        price: 7990,
    },
];

let search = prompt(`Buscar por: 
* Año 
* Genero
*Artista`);


if (search.toLowerCase() === "genero") {
    search = prompt(
        `Selecciona un genero: 
        * Rock 
        * Rock Nacional 
        * Latin 
        * EDM 
        * Pop
        * Hip Hop
        * Kpop`
    );

    if (search.toLowerCase() === "kpop") {
        search = listaProductos.filter((obj) => obj.genre == "Kpop");
        console.log(search);
    } else if (search.toLowerCase() === "rock") {
        search = listaProductos.filter((obj) => obj.genre == "Rock");
        console.log(search);
    } else if (search.toLowerCase() === "rock nacional") {
        search = listaProductos.filter((obj) => obj.genre == "Rock Nacional");
        console.log(search);
    } else if (search.toLowerCase() === "edm") {
        search = listaProductos.filter((obj) => obj.genre == "EDM");
        console.log(search);
    } else if (search.toLowerCase() === "hip hop") {
        search = listaProductos.filter((obj) => obj.genre == "Hip Hop");
        console.log(search);
    } else if (search.toLowerCase() === "latin") {
        search = listaProductos.filter((obj) => obj.genre == "Latin");
        console.log(search);
    } else if (search.toLowerCase() === "pop") {
        search = listaProductos.filter((obj) => obj.genre == "Pop");
        console.log(search);
    } else {
        console.log("Genero no disponible");
    }
} else if (search.toLowerCase() === "año") {
    search = Number(
        prompt(
            "Selecciona el año del album: 2009, 2011, 2013, 2014, 2016, 2018, 2019, 2020 o 2021"
        )
    );
    if (search === 2009) {
        search = listaProductos.filter((obj) => obj.year == 2009);
        console.log(search);
    } else if (search === 2011) {
        search = listaProductos.filter((obj) => obj.year == 2011);
        console.log(search);
    } else if (search === 2013) {
        search = listaProductos.filter((obj) => obj.year == 2013);
        console.log(search);
    } else if (search === 2014) {
        search = listaProductos.filter((obj) => obj.year == 2014);
        console.log(search);
    } else if (search === 2016) {
        search = listaProductos.filter((obj) => obj.year == 2016);
        console.log(search);
    } else if (search === 2018) {
        search = listaProductos.filter((obj) => obj.year == 2018);
        console.log(search);
    } else if (search === 2019) {
        search = listaProductos.filter((obj) => obj.year == 2019);
        console.log(search);
    } else if (search === 2020) {
        search = listaProductos.filter((obj) => obj.year == 2020);
        console.log(search);
    } else if (search === 2021) {
        search = listaProductos.filter((obj) => obj.year == 2021);
        console.log(search);
    } else {
        console.log("La fecha es incorecta");
    }
} else if (search.toLowerCase() === "artista") {
    search = listaProductos.filter((obj) => obj.artist);
    console.log(search);
}

//===================================================================//
//======================DESAFIO COMPLEMENTARIO======================//

/* const nombres = ["Paola", "Carla", "Lucas", "Matias", "Ana", "Sofia", "Guido"];
console.log(nombres.sort());

const numeros = [1, 76, 43, 67, 98, 3, 23, 2, 75, 55, 41];
console.log(numeros.sort((a, b) => a + b));
console.log(numeros.sort((a, b) => a - b));

const album = [
    { Artista: "Blackpink", Album: "Square Up", Año: 2018, Precio: 3490 },
    { Artista: "Dua Lipa", Album: "Future Nostalgia", Año: 2020, Precio: 6490 },
    { Artista: "Ed Sheeran", Album: "Divide", Año: 2017, Precio: 1360 },
    { Artista: "The Beatles", Album: "Abbey Road Anniversary", Año: 2019, Precio: 6990 }
]
const albumOrd = album.sort((a, b) => {
    if (a.Precio < b.Precio) return -1;
    if (a.Precio > b.Precio) return 1;
    return 0;
});
console.log(albumOrd); */

//======================DESAFIO PRIMERA ENTREGA======================//

/* class productos {
    constructor(artist, album, price) {
        this.artist = artist;
        this.album = album;
        this.price = parseFloat(price).toFixed(2);
    }
}
const item1 = new productos("The Beatles", "Abbey Road Anniversary", 6990);
const item2 = new productos("The Rolling Stones", "Blue & Lenoseme", 12650);
const item3 = new productos("Ed Sheeran", "Divide", 1360);
const item4 = new productos("Dua lipa", "Future Nostalgia", 6490);
const item5 = new productos("BlackPink", "The Show", 7990);
const item6 = new productos("BTS", "Butter", 6990);

alert(`Item1:The Beatles | Abbey Road Anniversary -
       Item2: The Rolling Stones | Blue & Lenoseme -
       Item3: Ed Sheeran | Divide -
       Item4: Dua Lipa | Future Nostalgia -
       Item5: Blackpink | The Show -
       Item6: BTS | Butter`);

let carrito = [];
let cantidad = 0;
let total = 0;

do {
    let items = prompt("Ingresa: item1, item2, item3, item4, item5 o item6");
    if (items.toLowerCase() == "item1") {
        total = total + parseInt(item1["price"]);
        alert(
            "Agregaste " + item1["album"] + " de " + item1["artist"] + " al carrito"
        );
    } else if (items.toLowerCase() == "item2") {
        total = total + parseInt(item2["price"]);
        alert(
            "Agregaste " + item2["album"] + " de " + item2["artist"] + " al carrito"
        );
    } else if (items.toLowerCase() == "item3") {
        total = total + parseInt(item3["price"]);
        alert(
            "Agregaste " + item3["album"] + " de " + item3["artist"] + " al carrito"
        );
    } else if (items.toLowerCase() == "item4") {
        total = total + parseInt(item4["price"]);
        alert(
            "Agregaste " + item4["album"] + " de " + item4["artist"] + " al carrito"
        );
    } else if (items.toLowerCase() == "item5") {
        total = total + parseInt(item5["price"]);
        alert(
            "Agregaste " + item5["album"] + " de " + item5["artist"] + " al carrito"
        );
    } else if (items.toLowerCase() == "item6") {
        total = total + parseInt(item6["price"]);
        alert(
            "Agregaste " + item6["album"] + " de " + item6["artist"] + " al carrito"
        );
    } else {
        items == "";
        break;
    }
    carrito.push(items);
} while (carrito.length != cantidad);
alert("Agregaste los siguientes albumes al carrito : " + carrito);
console.log(carrito);
alert("El total de la compra es de : " + "$" + total);
console.log(total); */