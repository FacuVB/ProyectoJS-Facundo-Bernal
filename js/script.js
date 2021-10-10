//DESAFIO 6

/* let listaProductos = [{
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
}*/

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


//===================================================================//



//=========================================DOM=========================================//
const baseDeDatos = [{
        id: 1,
        artist: "Rolling Stones",
        album: "Blue & Lenoseme",
        genre: "Rock",
        year: 2016,
        format: "Cd",
        price: 12650,
        img: "https://e-cdns-images.dzcdn.net/images/cover/5691be0453d3b0a3733a7b59503b1399/500x500.jpg"
    },
    {
        id: 2,
        artist: "The Beatles",
        album: "Abbey Road",
        genre: "Rock",
        year: 2019,
        format: "Vinilo",
        price: 12650,
        img: "https://img.discogs.com/Ujurc3xA-vIlBU_-4jZh7xtIhm4=/fit-in/500x500/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-14190454-1569566853-4916.jpeg.jpg"
    },
    {
        id: 3,
        artist: "The Killers",
        album: "Pressure Machine",
        genre: "Rock",
        year: 2021,
        format: "Cd",
        price: 3000,
        img: "https://cdns-images.dzcdn.net/images/cover/244debd9e3ee42a11d32d491232f5837/500x500.jpg"
    },
    {
        id: 4,
        artist: "Cerati",
        album: "Fuerza Natural",
        genre: "Rock Nacional",
        year: 2009,
        format: "Cd",
        price: 6250,
        img: "https://cdns-images.dzcdn.net/images/cover/633ff890de3f772c2bb6f94c56798db7/500x500.jpg"
    },
    {
        id: 5,
        artist: "Ciro y los persas",
        album: "Guerras",
        genre: "Rock Nacional",
        year: 2020,
        format: "Cd",
        price: 4999,
        img: "https://cdns-images.dzcdn.net/images/cover/321d6e39cdea1daac0594d14fcb70e38/500x500.jpg"

    },
    {
        id: 6,
        artist: "Divididos",
        album: "Haciendo cosas raras",
        genre: "Rock Nacional",
        year: 2018,
        format: "Cd",
        price: 3400,
        img: "https://www.cmtv.com.ar/tapas-cd/0616233001591605764.jpg"
    },
    {
        id: 7,
        artist: "ACDC",
        album: "Live River Plate 2009",
        genre: "Rock",
        year: 2011,
        format: "CD",
        price: 2360,
        img: "https://http2.mlstatic.com/D_NQ_NP_962422-MLA31077499517_062019-O.jpg"
    },
    {
        id: 8,
        artist: "Metallica",
        album: "S&M2",
        genre: "Rock",
        year: 2020,
        format: "Cd",
        price: 3077,
        img: "https://cdns-images.dzcdn.net/images/cover/8cb33b8b095e3e1b5dbe841618f37021/500x500.jpg"
    },
    {
        id: 9,
        artist: "Evanescence",
        album: " The Bitter Truth",
        genre: "Rock",
        year: 2021,
        format: "Cd",
        price: 8750,
        img: "https://cdns-images.dzcdn.net/images/cover/f3234ba1cbf782a23976ccd2a7a85f66/500x500.jpg"
    },
    {
        id: 10,
        artist: "Avicii",
        album: "True",
        genre: "EDM",
        year: 2013,
        format: "Cd",
        price: 4310,
        img: "https://http2.mlstatic.com/D_NQ_NP_611847-MLA27295582898_052018-O.jpg"
    },
    {
        id: 11,
        artist: "Marshmello",
        album: " Shockwave",
        genre: "EDM",
        year: 2021,
        format: "Cd",
        price: 4550,
        img: "https://cdns-images.dzcdn.net/images/cover/0f71884bbdeb738be96a5fcc49f373ec/500x500.jpg"
    },
    {
        id: 12,
        artist: "Steve Aoki",
        album: "Neon Future IV",
        genre: "EDM",
        year: 2020,
        format: "Cd",
        price: 1600,
        img: "https://cdns-images.dzcdn.net/images/cover/a9f3be44e22ea48b8b9af0a966c789ef/500x500.jpg"
    },
    {
        id: 13,
        artist: "Drake",
        album: "Certified Lover Boy",
        genre: "Hip Hop",
        year: 2021,
        format: "Cd",
        price: 2990,
        img: "https://cdns-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500.jpg"
    },
    {
        id: 14,
        artist: "Doja Cat",
        album: "Planet Her",
        genre: "Hip Hop",
        year: 2021,
        format: "Cd",
        price: 3450,
        img: "https://lastfm.freetls.fastly.net/i/u/500x500/d1619e7707eb9f63884cebce1f76b382.jpg"
    },
    {
        id: 15,
        artist: "Megan Thee Stallion",
        album: "Good News",
        genre: "Hip Hop",
        year: 2020,
        format: "Cd",
        price: 3250,
        img: "https://cdns-images.dzcdn.net/images/cover/73acf837b4856dc92eb79035de2cc18e/500x500.jpg"
    },
    {
        id: 16,
        artist: "Maria Becerra",
        album: "Animal",
        genre: "Latin",
        year: 2021,
        format: "Cd",
        price: 5400,
        img: "https://www.cmtv.com.ar/tapas-cd/0020874001630276641.jpg"
    },
    {
        id: 17,
        artist: "Bad Bunny",
        album: "El ultimo tour del ...",
        genre: "Latin",
        year: 2019,
        format: "Cd",
        price: 3600,
        img: "https://m.media-amazon.com/images/I/51VdkSx00DL._UXNaN_FMjpg_QL85_.jpg"
    },
    {
        id: 18,
        artist: "J Balvin",
        album: "Summer Vacation",
        genre: "latin",
        year: 2020,
        format: "Cd",
        price: 4300,
        img: "https://cdns-images.dzcdn.net/images/cover/f61dcdb7532e66da1845d485a48957bf/500x500.jpg"
    },
    {
        id: 19,
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        genre: "Pop",
        year: 2020,
        format: "Vinilo",
        price: 12650,
        img: "https://http2.mlstatic.com/D_NQ_NP_902444-MLA41062427273_032020-O.jpg"
    },
    {
        id: 20,
        artist: "Ariana Grande",
        album: " My Everything",
        genre: "Pop",
        year: 2014,
        format: "Vinilo",
        price: 12650,
        img: "https://http2.mlstatic.com/D_NQ_NP_861012-MLA29725440527_032019-O.jpg"
    },
    {
        id: 21,
        artist: "Olivia Rodrigo",
        album: "Sour",
        genre: "Pop",
        year: 2021,
        format: "Cd",
        price: 4050,
        img: "https://http2.mlstatic.com/D_NQ_NP_988214-MLA47194530167_082021-O.jpg"
    },
    {
        id: 22,
        artist: "Blackpink",
        album: "The Album",
        genre: "Kpop",
        year: 2020,
        format: "Cd",
        price: 7990,
        img: "https://jenesaispop.com/wp-content/uploads/2020/11/blackpink-thealbum.jpg"
    },
    {
        id: 23,
        artist: "BTS",
        album: "Butter",
        genre: "Kpop",
        year: 2021,
        format: "Cd",
        price: 6990,
        img: "https://cdns-images.dzcdn.net/images/cover/0cc1c0ada6f9aab8128e7d8a7d61aec2/500x500.jpg"
    },
    {
        id: 24,
        artist: "TXT",
        album: "The chaos chapter: F or E",
        genre: "Kpop",
        year: 2021,
        format: "Cd",
        price: 7990,
        img: "https://m.media-amazon.com/images/I/61Kdu5+crQL._SS500_.jpg"
    },
];

const domItems = document.querySelector('#items');

function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        //ESTRUCTURA
        const miNodo = document.createElement('div');
        miNodo.classList.add('card');
        miNodo.style.width = "18rem"

        //BODY
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        //TITULO
        const miNodoTitulo = document.createElement('h5');
        miNodoTitulo.classList.add('card-title');
        miNodoTitulo.textContent = info.artist + " | " + info.album;

        //IMAGEN
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.img);

        //PRECIO
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = "$ " + info.price

        //BOTON
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn');
        miNodoBoton.style.backgroundColor = "#422f75"
        miNodoBoton.style.color = "#fffff"
        miNodoBoton.textContent = "Comprar";

        //INSERTAMOS
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitulo);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        domItems.appendChild(miNodo);
    })
}

renderizarProductos()