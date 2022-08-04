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

// Search 
let inputSearch = document.querySelector('.header .search-form input');
let searchBtn = document.querySelector('.header .search-form a');

let searchHint = document.querySelector('.header .search-form .search-hint');
inputSearch.onclick = function() {
    searchHint.style.display="block";
}

// Product Filter
let getDivProduct = document.querySelector('.container');
let getBackgroundPlace = document.querySelector('.container-background');

// object in productList position must match object in productListDiv  
let productList = ['Cà Rốt', 'Hành Tím','Chanh Tươi','Khoai Tây'];
let productListDiv = ['<div class="box-product"><img src="./image/product-7.png" alt="" /><h3>Cà rốt</h3><div class="price">12.000 VNĐ/kg</div><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></div><a href="#" class="btn">Thêm vào giỏ</a></div> <div class="product-info"><div class="product-header"><h3>Tên sản phẩm:</h3><div class="product-name">Cà Rốt</div></div><h3>Thông tin sản phẩm:</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.</p></div>',
'<div class="box-product"><img src="./image/product-2.png" alt="" /><h3>Hành Tím</h3><div class="price">12.000 VNĐ/kg</div><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></div><a href="#" class="btn">Thêm vào giỏ</a></div> <div class="product-info"><div class="product-header"><h3>Tên sản phẩm:</h3><div class="product-name">Hành Tím</div></div><h3>Thông tin sản phẩm:</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.</p></div>',
'<div class="box-product"><img src="./image/product-8.png" alt="" /><h3>Chanh Tươi</h3><div class="price">7.000 VNĐ/kg</div><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></div><a href="#" class="btn">Thêm vào giỏ</a></div> <div class="product-info"><div class="product-header"><h3>Tên sản phẩm:</h3><div class="product-name">Chanh Tươi</div></div><h3>Thông tin sản phẩm:</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.</p></div>',
'<div class="box-product"><img src="./image/product-5.png" alt="" /><h3>Khoai Tây</h3><div class="price">12.000 VNĐ/kg</div><div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></div><a href="#" class="btn">Thêm vào giỏ</a></div> <div class="product-info"><div class="product-header"><h3>Tên sản phẩm:</h3><div class="product-name">Khoai Tây</div></div><h3>Thông tin sản phẩm:</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.</p></div>',
];
searchBtn.onclick = function() {
  getBackgroundPlace.classList.add('active');
  searchForm.classList.remove('active');
  getDivProduct.classList.add('active','grid','wide');
  getBackgroundPlace.classList.add('active');
  searchForm.classList.remove('active');
  // regEx replace(/\s+/g, '') no white space
  if(!inputSearch.value || !inputSearch.value.replace(/\s+/g, '')){
    getDivProduct.innerHTML = '<div class="box-product"><img src="./image/empty_cart.jpg" alt="" /><h3>Rất tiếc sản phẩm này không có !</h3><div class="price"></div><div class="stars"></div></div> <div class="product-info"><div class="product-header"><h3>Tên sản phẩm:</h3><div class="product-name"></div></div><h3>Thông tin sản phẩm:</h3><p></p></div>';
  } else {
    for(let i = 0; i < productListDiv.length; i++){
      if(productList[i].toLowerCase().trim().includes(inputSearch.value.toLowerCase().trim())){
        for(let j in productList){
          if(productListDiv.indexOf(productListDiv[i]) == j){
            getDivProduct.innerHTML = productListDiv[i];
          }
        }
        break;
      } else {
        getDivProduct.innerHTML = '<div class="box-product"><img src="./image/empty_cart.jpg" alt="" /><h3>Rất tiếc sản phẩm này không có !</h3><div class="price"></div><div class="stars"></div></div> <div class="product-info"><div class="product-header"><h3>Tên sản phẩm:</h3><div class="product-name"></div></div><h3>Thông tin sản phẩm:</h3><p></p></div>';
      }
    }
  }
}

window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    searchHint.style.display = "none";  
}

// Products


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

