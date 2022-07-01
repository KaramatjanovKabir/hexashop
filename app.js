const burger = document.getElementById("burger");
const Nav = document.querySelector(".nav_mobile");


burger.addEventListener("click" , ()=> {
    Nav.classList.toggle("show_menu")
})