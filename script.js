const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const cartDisplay = document.querySelector('.cart-filled-box');
let isClicked = true;
const plus = document.querySelector('.icon-plus');
const minus = document.querySelector('.icon-minus');
const num = document.querySelector('.zero');
const cartQuantityElement = document.getElementById('cart-quantity');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const price = document.querySelector('.price-now');
const thumbnailContainer = document.querySelector('.thumbnail-container');
const imageContainer = document.querySelector('.display-container');


// To show nav-menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
})

// To display and toggle cart
let showOrHide = function() {
  if(isClicked) {
    cartDisplay.style.display = 'block';
    isClicked = false;
  } else {
    cartDisplay.style.display = 'none';
    isClicked = true;
  }
  
}

// Price calculation of cart item
let cartQuantity = 0;
let cartTotalPrice = 0;

const updateCart = () => {
  cartQuantityElement.textContent = cartQuantity;
  cartTotalPriceElement.textContent = `$${cartTotalPrice.toFixed(2)}`;
}

const updateNum = () => {
  num.textContent = cartQuantity;
}

const updatePrice = () => {
  if(cartQuantity > 0){
    price.textContent = `$${cartTotalPrice.toFixed(2)}`;
  }  
}

plus.addEventListener('click', () => {
  cartQuantity++;
  cartTotalPrice += 125.00;
  updateCart();
  updateNum();
  updatePrice();
});

minus.addEventListener('click', () => {
  if(cartQuantity > 0){
    cartQuantity--;
    cartTotalPrice -= 125.00;
    updateCart();
    updateNum();
    updatePrice();
  }
});

// Thumbnail slider for web.
const thumbnails = thumbnailContainer.querySelectorAll('img');
// attach a click event listener to each thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    //get the path of the full sized image from the data-image attribute
    const imagePath =thumbnail.getAttribute('data-image');

    //update the main image source and alt attributes
    const mainImage = imageContainer.querySelector('img');
    mainImage.src = imagePath;
    mainImage.alt = thumbnail.alt;
  });
});

// Image slider for mobile
const slides = document.querySelectorAll('.image-container img');
let slideIndex = 0;
let intervalId = null;

// initializeSlider()
document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider(){
  
  if(slides.length > 0){
    slides[slideIndex].classList.add('displaySlide');
    intervalId = setInterval(nextSlide, 5000);
  }
  
  

}
function showSlide(index){

  if(index >= slides.length){
    slideIndex = 0;
  }
  else if(index < 0){
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}

function prevSlide(){
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}