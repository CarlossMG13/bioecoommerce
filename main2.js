console.log("Hello, World!");
let menuMobile = document.getElementById("menu-mobile");
let ham_menu = document.getElementById("ham_menu");

menuMobile.addEventListener("click", function () {
    ham_menu.classList.toggle("hidden");
});

