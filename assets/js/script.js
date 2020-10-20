var showMenu = document.querySelector('.show-menu');
var burger = document.querySelector('.burger');

burger.addEventListener("click", function() {
    
    if(showMenu.length > 0) {
        menu.classList.add("hide-menu");    
    }else{
        menu.classList.add("show-menu");
    }
    console.log(menu);
});
