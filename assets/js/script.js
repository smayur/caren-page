var menu = document.querySelector('.menu');
var burger = document.querySelector('.burger');

burger.addEventListener("click", function() {
    menu.classList.add("show");
    console.log(menu);
});
