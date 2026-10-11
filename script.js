const products = [

    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 1499,
        originalPrice: 2499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },

    {
        id: 2,
        name: "Smart Fitness Watch",
        category: "Electronics",
        price: 2199,
        originalPrice: 3999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },

    {
        id: 3,
        name: "Classic Casual T-Shirt",
        category: "Fashion",
        price: 599,
        originalPrice: 999,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },

    {
        id: 4,
        name: "Comfort Running Shoes",
        category: "Fashion",
        price: 1799,
        originalPrice: 2999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },

    {
        id: 5,
        name: "Premium Coffee Maker",
        category: "Home",
        price: 2299,
        originalPrice: 3499,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"
    },

    {
        id: 6,
        name: "Modern Table Lamp",
        category: "Home",
        price: 899,
        originalPrice: 1499,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"
    },

    {
        id: 7,
        name: "Natural Skin Care Set",
        category: "Beauty",
        price: 1299,
        originalPrice: 1899,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500"
    },

    {
        id: 8,
        name: "Floral Everyday Perfume",
        category: "Beauty",
        price: 999,
        originalPrice: 1599,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"
    },

    {
        id: 9,
        name: "Nova X5 Smartphone",
        category: "Mobiles",
        price: 15999,
        originalPrice: 18999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },

    {
        id: 10,
        name: "Fast Charging Power Bank",
        category: "Mobiles",
        price: 1099,
        originalPrice: 1699,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500"
    },

    {
        id: 11,
        name: "Atomic Habits",
        category: "Books",
        price: 399,
        originalPrice: 599,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
    },

    {
        id: 12,
        name: "Programming Fundamentals",
        category: "Books",
        price: 649,
        originalPrice: 899,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500"
    },

    {
        id: 13,
        name: "Professional Cricket Bat",
        category: "Sports",
        price: 1999,
        originalPrice: 2799,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500"
    },

    {
        id: 14,
        name: "Yoga Exercise Mat",
        category: "Sports",
        price: 799,
        originalPrice: 1299,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"
    }

];


const productContainer =
    document.getElementById("productContainer");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortProducts =
    document.getElementById("sortProducts");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const searchCategory =
    document.getElementById("searchCategory");

const cartCount =
    document.getElementById("cartCount");

const resultMessage =
    document.getElementById("resultMessage");

const noProducts =
    document.getElementById("noProducts");


let cartItems = 0;



function calculateDiscount(product) {

    return Math.round(
        (
            (product.originalPrice - product.price)
            /
            product.originalPrice
        ) * 100
    );

}



function createStars(rating) {

    const roundedRating =
        Math.round(rating);

    let stars = "";

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if (i <= roundedRating) {
            stars += "★";
        }

        else {
            stars += "☆";
        }

    }

    return stars;

}



function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        noProducts.style.display = "block";

        resultMessage.textContent =
            "0 products found";

        return;
    }


    noProducts.style.display = "none";

    resultMessage.textContent =
        productList.length +
        " products found";


    productList.forEach(function(product) {

        const discount =
            calculateDiscount(product);


        const productCard =
            document.createElement("article");


        productCard.className =
            "product-card";


        productCard.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <p class="product-category">
                ${product.category}
            </p>

            <h3 class="product-name">
                ${product.name}
            </h3>

            <div class="rating">

                ${createStars(product.rating)}

                <span>
                    ${product.rating}
                </span>

            </div>

            <div class="price-area">

                <span class="current-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </span>

                <span class="original-price">
                    ₹${product.originalPrice.toLocaleString("en-IN")}
                </span>

                <span class="discount">
                    ${discount}% off
                </span>

            </div>

            <button
                class="add-cart"
                data-id="${product.id}"
            >
                Add to Cart
            </button>

        `;


        productContainer.appendChild(
            productCard
        );

    });


    addCartEvents();

}



function addCartEvents() {

    const buttons =
        document.querySelectorAll(
            ".add-cart"
        );


    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                cartItems++;

                cartCount.textContent =
                    cartItems;

                showNotification();

            }
        );

    });

}



function showNotification() {

    const notification =
        document.getElementById(
            "notification"
        );


    notification.classList.add(
        "show"
    );


    setTimeout(function() {

        notification.classList.remove(
            "show"
        );

    }, 1800);

}



function filterAndSortProducts() {

    let filteredProducts =
        [...products];


    const selectedCategory =
        categoryFilter.value;


    const text =
        searchInput.value
            .toLowerCase()
            .trim();


    const searchSelectedCategory =
        searchCategory.value;



    if (
        selectedCategory !== "all"
    ) {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return (
                        product.category ===
                        selectedCategory
                    );

                }
            );

    }



    if (
        searchSelectedCategory !== "all"
    ) {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return (
                        product.category ===
                        searchSelectedCategory
                    );

                }
            );

    }



    if (text !== "") {

        filteredProducts =
            filteredProducts.filter(
                function(product) {

                    return (
                        product.name
                            .toLowerCase()
                            .includes(text)
                    );

                }
            );

    }



    const sortValue =
        sortProducts.value;


    if (sortValue === "low") {

        filteredProducts.sort(
            function(a, b) {

                return a.price - b.price;

            }
        );

    }


    else if (sortValue === "high") {

        filteredProducts.sort(
            function(a, b) {

                return b.price - a.price;

            }
        );

    }


    else if (
        sortValue === "rating"
    ) {

        filteredProducts.sort(
            function(a, b) {

                return b.rating - a.rating;

            }
        );

    }


    else if (
        sortValue === "discount"
    ) {

        filteredProducts.sort(
            function(a, b) {

                return (
                    calculateDiscount(b)
                    -
                    calculateDiscount(a)
                );

            }
        );

    }


    displayProducts(
        filteredProducts
    );

}



categoryFilter.addEventListener(
    "change",
    filterAndSortProducts
);


sortProducts.addEventListener(
    "change",
    filterAndSortProducts
);


searchButton.addEventListener(
    "click",
    filterAndSortProducts
);


searchInput.addEventListener(
    "keyup",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            filterAndSortProducts();

        }

    }
);



const categoryCards =
    document.querySelectorAll(
        ".category-card"
    );


categoryCards.forEach(
    function(card) {

        card.addEventListener(
            "click",
            function() {

                const category =
                    card.dataset.category;


                categoryFilter.value =
                    category;


                searchCategory.value =
                    "all";


                searchInput.value =
                    "";


                filterAndSortProducts();


                document
                    .getElementById(
                        "productsSection"
                    )
                    .scrollIntoView();

            }
        );

    }
);



const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


navLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                const category =
                    link.dataset.category;


                categoryFilter.value =
                    category;


                searchCategory.value =
                    "all";


                searchInput.value =
                    "";


                filterAndSortProducts();


                document
                    .getElementById(
                        "productsSection"
                    )
                    .scrollIntoView();

            }
        );

    }
);



const heroButtons =
    document.querySelectorAll(
        ".hero-shop"
    );


heroButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                categoryFilter.value =
                    button.dataset.category;


                searchCategory.value =
                    "all";


                searchInput.value =
                    "";


                filterAndSortProducts();


                document
                    .getElementById(
                        "productsSection"
                    )
                    .scrollIntoView();

            }
        );

    }
);



/* HERO SLIDER */

const slides =
    document.querySelectorAll(
        ".slide"
    );


let currentSlide = 0;


function showSlide(index) {

    slides.forEach(
        function(slide) {

            slide.classList.remove(
                "active"
            );

        }
    );


    slides[index]
        .classList.add(
            "active"
        );

}



function nextSlide() {

    currentSlide =
        (currentSlide + 1)
        %
        slides.length;


    showSlide(currentSlide);

}



function previousSlide() {

    currentSlide =
        (
            currentSlide
            -
            1
            +
            slides.length
        )
        %
        slides.length;


    showSlide(currentSlide);

}



document
    .getElementById(
        "nextSlide"
    )
    .addEventListener(
        "click",
        nextSlide
    );


document
    .getElementById(
        "previousSlide"
    )
    .addEventListener(
        "click",
        previousSlide
    );


setInterval(
    nextSlide,
    5000
);



/* MOBILE MENU */

document
    .getElementById(
        "menuButton"
    )
    .addEventListener(
        "click",
        function() {

            document
                .getElementById(
                    "navMenu"
                )
                .classList
                .toggle(
                    "open"
                );

        }
    );



/* BACK TO TOP */

document
    .getElementById(
        "backToTop"
    )
    .addEventListener(
        "click",
        function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );



displayProducts(products);