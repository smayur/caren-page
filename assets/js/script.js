var menu = document.querySelector('.menu');
var showMenu = document.querySelector('.show-menu');
var burger = document.querySelector('.burger');

burger.addEventListener("click", function() {
    
    if(showMenu.length > 0) {
        menu.classList.add("hide-menu");
        menu.classList.remove("show-menu");
    }else{
        menu.classList.add("show-menu");
        menu.classList.remove("hide-menu");
    }
    console.log(menu);
});
