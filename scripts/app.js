let menu = document.querySelector(".nav_menu");
let menuBtn = document.querySelector(".menu_btn");
let menubtnIcon = document.querySelector(".menu_btn i");

menuBtn.addEventListener("click", function () {
    if (menubtnIcon.classList.contains("fa-bars")) {
        menu.style.left = "0"
        menubtnIcon.classList="fa fa-times fa-3x"
    }else{
        menu.style.left = "-320"
        menubtnIcon.classList="fa fa-bars fa-3x"
    }
})