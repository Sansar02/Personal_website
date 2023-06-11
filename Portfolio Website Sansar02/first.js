let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
const body = document.querySelector("body");


menu.onclick =() =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
    }


