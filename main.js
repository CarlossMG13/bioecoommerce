console.log("Hello, World!");

const botonesCapsulas = document.querySelectorAll('.selector-capsulas button');
const imagenProducto = document.getElementById('imagen-producto');
const nombreProducto = document.getElementById('nombre-producto');
const precioProducto = document.getElementById('precio-producto');

let menuMobile = document.getElementById("menu-mobile");
      let ham_menu = document.getElementById("ham_menu");

      menuMobile.addEventListener("click", function () {
        ham_menu.classList.toggle("hidden");
      });
