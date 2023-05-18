// Product preview
const productImage = document.querySelector("#product-img")
const previewImage = document.querySelectorAll(".preview-img")

previewImage[0].addEventListener("click", function () {
    productImage.src = previewImage[0].src
})
previewImage[1].addEventListener("click", function () {
    productImage.src = previewImage[1].src
})
previewImage[2].addEventListener("click", function () {
    productImage.src = previewImage[2].src
})
previewImage[3].addEventListener("click", function () {
    productImage.src = previewImage[3].src
})