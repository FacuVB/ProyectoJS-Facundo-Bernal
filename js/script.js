//==========================IMPORTS==========================//

import searchFilter from "./filtro.js";
import baseDeDatos from "./musicDB.js";

//==================CONSTANTES Y VARIABLES==================//
let carrito = [];
let total = 0;
const domItems = document.querySelector('#items');
const domCarrito = document.querySelector('#carrito');
const domTotal = document.querySelector('#total');
const domBorrarCarrito = document.querySelector('#borrarCarrito');
const miLocalStorage = window.localStorage;

//========================FUNCIONES========================//
//BUSCADOR

searchFilter(".card-filter", ".card");


//RENDERIZAR LISTA DE PRODUCTOS

function renderizarProductos() {
  baseDeDatos.forEach((info) => {

      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card');
      miNodo.style.width = "18rem";
      miNodo.style.marginRight = "2rem";
      miNodo.style.marginBottom = "2rem";

      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-block');

      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.album;

      const miNodoTitle2 = document.createElement('h6');
      miNodoTitle2.classList.add('card-title');
      miNodoTitle2.textContent = info.artist;

      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.img);

      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = '$' + info.price;

      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn');
      miNodoBoton.textContent = '+';
      miNodoBoton.style.backgroundColor = "#422f75";
      miNodoBoton.style.color = "#fffff";
      miNodoBoton.textContent = "Comprar";
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', agregarProducto);
   
      // Insertamos cada parte del elemento card
      
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoTitle2)
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      domItems.appendChild(miNodo);
  });
}

//AGREGAR PRODUCTO

function agregarProducto(e) {

  carrito.push(e.target.getAttribute('marcador'))

  calcularTotal();

  renderizarCarrito();

  guardarCarritoEnLocalStorage();

  console.log(carrito);
}

// RENDERIZAR CARRITO

function renderizarCarrito() {

  domCarrito.textContent = '';

  const carritoSinDuplicados = [...new Set(carrito)];

  carritoSinDuplicados.forEach((item) => {

      const miItem = baseDeDatos.filter((itemBaseDatos) => {

          return itemBaseDatos.id === parseInt(item);
      });

      const numeroUnidadesItem = carrito.reduce((total, itemId) => {

          return itemId === item ? total += 1 : total;
      }, 0);

      // LI DE LA SECCION CARRITO
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item-carrito', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem}) ${miItem[0].album} - ${miItem[0].artist} | $ ${miItem[0].price}`;

      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
    
      miNodo.appendChild(miBoton);
      domCarrito.appendChild(miNodo);
  });
}

// EVENTO BORRAR ITEM DEL CARRITO

function borrarItemCarrito(e) {

  const id = e.target.dataset.item;

  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });

  renderizarCarrito();

  calcularTotal();

  guardarCarritoEnLocalStorage();

}

///PRECIO FINAL

function calcularTotal() {
  total = 0;
  
  carrito.forEach((item) => {

      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      total = total + miItem[0].price;
  });

  domTotal.textContent = total;
}

//EVENTO VACIAR CARRITO

function borrarCarrito() {
  carrito = [];

  renderizarCarrito();

  calcularTotal();

  localStorage.clear();
}

function guardarCarritoEnLocalStorage () {
  miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {

  if (miLocalStorage.getItem('carrito') !== null) {

      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
  }
}

//INICIALIZACION 

domBorrarCarrito.addEventListener('click', borrarCarrito);

cargarCarritoDeLocalStorage();
renderizarProductos();
calcularTotal();
renderizarCarrito();

