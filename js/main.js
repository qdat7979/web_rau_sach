// header section
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=> {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()=> {
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = ()=> {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

let registerForm = document.querySelector('.register-form');
let overlay = document.querySelector('.overlay');
document.querySelector('.header .login-form p a.register').onclick = () => {
    registerForm.classList.add('active');
    overlay.style.display ='block';
    overlay.classList.add('active');
    loginForm.classList.remove('active');
}

//Close button registerForm
document.querySelector('.header .register-form .close i').onclick = () => {
  overlay.style.display ='none';
  overlay.classList.remove('active');
  registerForm.classList.remove('active');
}

// Forget password
let forgetForm = document.querySelector('.forget-form');
document.querySelector('.header .login-form p a').onclick = () => {
    forgetForm.classList.add('active');
    overlay.style.display ='block';
    overlay.classList.add('active');
    loginForm.classList.remove('active');
}
document.querySelector('.header .forget-form .close i').onclick = (e) => {
  overlay.style.display ='none';
  overlay.classList.remove('active');
  forgetForm.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=> {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}


// product section
var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

//review section
var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});




