// Nav 
const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".content")

navToggle.addEventListener("click", function (params) {
    nav.classList.toggle("show-nav-content")
})