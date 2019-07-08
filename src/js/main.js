var burger = document.querySelector(".header__burger");
var headerMenu = document.querySelector(".header__menu")
var header = document.querySelector(".header")
burger.addEventListener("click", function(e){
    headerMenu.classList.toggle("header__menu_shown");
    burger.classList.toggle('header__burger_opened');
    header.classList.toggle('header_opened-menu');
});