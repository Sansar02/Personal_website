// MENUU OPEN AND CLOSE 
const open = document.getElementById("menu");
const close = document.getElementById("colse");
const list = document.querySelector(".all_list");
const nav_link = document.querySelectorAll(".links");

nav_link.forEach((e) => {
    e.addEventListener("click", () => { 
        list.classList.remove("show");
        document.body.classList.remove("disable");
    })
})

open.addEventListener("click", () => {
    list.classList.add("show");
    document.body.classList.add("disable");
})

close.addEventListener("click", () => {
    list.classList.remove("show");
    document.body.classList.remove("disable");
})

// const moon = document.getElementById("moon");
// moon.addEventListener("click", () => {
//     moon.classList.toggle("bx-sun");
// })

// STICKY BAR 
let header = document.getElementById("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})
