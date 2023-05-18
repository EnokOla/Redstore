// Login and Register 
const loginToggle = document.querySelector(".login-toggle")
const registerToggle = document.querySelector(".register-toggle")

const indicator = document.querySelector("#indicator")
const loginForm = document.querySelector("#login-form")
const registerForm = document.querySelector("#register-form")

loginToggle.addEventListener("click", function (params) {
    loginForm.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(0px)"
    registerForm.style.transform = "translateX(300px)"
})
registerToggle.addEventListener("click", function (params) {
    registerForm.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(100px)"
    loginForm.style.transform = "translateX(0px)"
})