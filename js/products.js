// Products
const products = [
    {
        id: 1,
        category: "clothes",
        img: "./images/product-1.jpg",
        name: "Red Printed Puma T-shirt",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star-half-stroke'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "16.26"
    },
    {
        id: 2,
        category: "footwear",
        img: "./images/product-2.jpg",
        name: "Black_White HRX Elite Running Shoes",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "19.99"
    },
    {
        id: 3,
        category: "clothes",
        img: "./images/product-3.jpg",
        name: "Men's Twill Gray Jogger Pants with side pockets",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star'></i>",
        rating5: "<i class='fa-solid fa-star-half-stroke'></i>",
        price: "29.40"
    },
    {
        id: 4,
        category: "clothes",
        img: "./images/product-4.jpg",
        name: "Blue Short Sleeve Puma T-shirt",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-regular fa-star'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "14.86"
    },
    {
        id: 5,
        category: "footwear",
        img: "./images/product-5.jpg",
        name: "Gray-White Jordans Lift-Off Basketball Shoes",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star'></i>",
        rating5: "<i class='fa-solid fa-star'></i>",
        price: "122.99"
    },
    {
        id: 6,
        category: "clothes",
        img: "./images/product-6.jpg",
        name: "Black Printed Puma T-shirt",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star-half-stroke'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "18.09"
    },
    {
        id: 7,
        category: "footwear",
        img: "./images/product-7.jpg",
        name: "Black-Gray-White HRX Printed Sock",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star-half-stroke'></i>",
        rating4: "<i class='fa-regular fa-star'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "19.99"
    },
    {
        id: 8,
        category: "accessories",
        img: "./images/product-8.jpg",
        name: "Black Ultra-Thin Waterproof-Fashion Wrist Watch",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-regular fa-star'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "10.31"
    },
    {
        id: 9,
        category: "accessories",
        img: "./images/product-9.jpg",
        name: "Black Leather Night Vision Luminous Watch",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "11.99"
    },
    {
        id: 10,
        category: "clothes",
        img: "./images/product-10.jpg",
        name: "Black-Red HRX Elite Running Shoes",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star'></i>",
        rating5: "<i class='fa-solid fa-star'></i>",
        price: "59.99"
    },
    {
        id: 11,
        category: "clothes",
        img: "./images/product-11.jpg",
        name: "Gray Skechers Men's Go Max-Athletic Walking Shoe Sneaker",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "39.55"
    },
    {
        id: 12,
        category: "clothes",
        img: "./images/product-12.jpg",
        name: "Black Men's Twill Jogger Pants",
        rating1: "<i class='fa-solid fa-star'></i>",
        rating2: "<i class='fa-solid fa-star'></i>",
        rating3: "<i class='fa-solid fa-star'></i>",
        rating4: "<i class='fa-solid fa-star'></i>",
        rating5: "<i class='fa-regular fa-star'></i>",
        price: "49.99"
    },
]

const productsContainer = document.querySelector("#products-container")

window.addEventListener("DOMContentLoaded", function (params) {
    let displayMenu = products.map(function (product) {
        return  `
        <div class="grid-col">
            <a href="./product_details.html">
                <img src="${product.img}" alt="" />
                <h4>${product.name}</h4>
                <div class="ratings">
                    ${product.rating1}
                    ${product.rating2}
                    ${product.rating3}
                    ${product.rating4}
                    ${product.rating5}
                </div>
                <p>$${product.price}</p>
            </a>
        </div>
        `;
    })
    displayMenu = displayMenu.join("");
    productsContainer.innerHTML = displayMenu;
})

