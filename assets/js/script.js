var menu = document.querySelector('.menu');
var burger = document.querySelector('.burger');

burger.addEventListener("click", function() {
    menu.classList.toggle("show-menu");
    menu.classList.toggle("hide-menu");
});
