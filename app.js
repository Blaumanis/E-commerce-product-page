// SELECTORS
const cartContainer = document.querySelector('.cart-container');
const itemBtn = document.querySelectorAll('.btn');
const itemCount = document.querySelector('.item-count');
const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const addToCart = document.querySelector('.add-to-cart-btn');
const cartModule = document.querySelector('.cart-module');
const emptyCart = document.querySelector('.empty-cart');
const cartItemInfo = document.querySelector('.cart-item-info');
const checkoutBtn = document.querySelector('.checkout-btn');
const price = document.querySelector('.price')
const checkout = document.querySelector('.checkout-btn')
const productName = document.querySelector('.product-name')

// LISTENERS
// item adding or removing fn 
itemBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('add-btn')){
            itemCount.textContent = (+itemCount.textContent + 1);
            price.textContent = (+price.textContent + 125.00).toFixed(2);
        } else {
            if(itemCount.textContent === "1"){
                itemCount.textContent = itemCount.textContent;
            } else {
                itemCount.textContent = itemCount.textContent - 1;
                price.textContent = (+price.textContent - 125.00).toFixed(2);
            }
        }
    })
})

// open cart fn
cartIcon.addEventListener('click', () => {
    if((+cartCount.textContent) > 0){
        emptyCart.style.display = "none";
        cartItemInfo.style.display = "flex";
        checkoutBtn.style.display = "block";
    }
        cartModule.classList.toggle('open');
})

// close cart fn


// mobile menu fn
let hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-menu');
let closeIcon = document.querySelector('.close-icon');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
})
closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
})

// add to cart fn
addToCart.addEventListener('click', () => {
    cartCount.style.display = "block";
    if(cartCount.textContent === "1" && cartCount.textContent !== "2"){
        cartCount.textContent = (+cartCount.textContent) + 1;
    } else{
        cartCount.textContent = (+cartCount.textContent) + 1;
    }


    // create cart desc
    const cartItemDesc = document.createElement('div')
    cartItemDesc.classList.add('cart-item-description')
    cartItemInfo.append(cartItemDesc)

    // create cart img
    const cartImg = document.createElement('img')
    cartImg.classList.add('cart-image')
    cartImg.src = '/images/image-product-1-thumbnail.jpg'
    cartItemDesc.append(cartImg)

    // create cart name, price, times, dollar delete
    let text = productName.innerText.replace(/ Edition Sneakers/, "")
    const cartItemName = document.createElement('p')
    cartItemName.classList.add('cart-item-name')
    cartItemName.innerText = text;
    cartItemDesc.append(cartItemName)

    const cartItemPrice = document.createElement('p')
    cartItemPrice.classList.add('cart-item-price')
    cartItemPrice.innerText = "$" + price.innerText;
    cartItemDesc.append(cartItemPrice)

    const cartTimes = document.createElement('small')
    cartTimes.classList.add('cart-times')
    cartTimes.innerText = "x" + itemCount.innerText
    cartItemDesc.append(cartTimes)

    const cartItemTotalPrice = document.createElement('small')
    cartItemTotalPrice.classList.add('cart-item-total-price')
    cartItemTotalPrice.innerText = "$" + price.innerText;
    cartItemDesc.append(cartItemTotalPrice)

    const deleteIcon = document.createElement('img')
    deleteIcon.classList.add('delete-icon')
    deleteIcon.src = '/images/icon-delete.svg'
    cartItemDesc.append(deleteIcon)

    itemCount.textContent = 1;
    price.textContent = "125.00";
})

// gallery
let activeImage = 0;
const modalImage = document.querySelector('.modal-product-1')
const thumbnails = document.querySelectorAll('.thumbnail');
const modalThumbnails = document.querySelectorAll('.modal-thumbnail')
const photosModal = document.querySelector('.photos-modal')
const mainImage = document.querySelector('.product-1');
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        let imgSrc = thumbnail.src.replace(/-thumbnail/g, "");
        mainImage.src = imgSrc;
    })
})

modalThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        let imgSrc = thumbnail.src.replace(/-thumbnail/g, "");
        modalImage.src = imgSrc;
    })
})

mainImage.addEventListener('click', () => {
    photosModal.classList.add('active')
})

next.addEventListener('click', () => {
   activeImage++
   if (activeImage > imgArray.length-1) {
       activeImage = 0
   }
   modalImage.src = imgArray[activeImage]
})

previous.addEventListener('click', () => {
    activeImage--
    if (activeImage < 0) {
        activeImage = imgArray.length - 1;
    }
    modalImage.src = imgArray[activeImage]
})

const imgArray = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
];

const thumbnailImgArray = [
    "image-product-1-thumbnail",
    "image-product-2-thumbnail",
    "image-product-3-thumbnail",
    "image-product-4-thumbnail",
]


// global eventListener
document.addEventListener('click', e => {
    if (e.target.matches('.photos-modal')) {
        photosModal.classList.remove('active')
    } else if (e.target.matches('.product-information') || e.target.matches('.header')) {
        cartModule.classList.remove('open')
    } else if (e.target.matches('.delete-icon')) {
        e.target.parentElement.remove()
        cartCount.textContent = (+cartCount.textContent) - 1;
        if(cartCount.innerText === "0") {
            cartCount.style.display = "none";
            checkoutBtn.style.display = "none";
            emptyCart.style.display = "block";
        }
    }
})