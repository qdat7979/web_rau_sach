// Shopping cart
// Modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("cart-btn");
let close = document.getElementsByClassName("close")[0];

let close_footer = document.getElementsByClassName("close-footer")[0];
let order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function Redirect () {
  window.location="./cash.html"
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// update cart 
function updatecart() {
  let cart_item = document.getElementsByClassName("cart-items")[0];
  console.log(cart_item)
  let cart_rows = cart_item.getElementsByClassName("cart-row");
  let total = 0;
  let sl = 0;
  for (let i = 0; i < cart_rows.length; i++) {
    let cart_row = cart_rows[i]
    let price_item = cart_row.getElementsByClassName("cart-price ")[0]
    let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
    let price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
    let quantity = quantity_item.value // lấy giá trị trong thẻ input

    total = total + (price * quantity)
    sl = sl + 1
  }
  // console.log(sl)
  document.querySelector("#cart-btn").innerHTML = `(${sl})`
  const sum = total 
  
  // console.log(sum)
  if (total < 1000) {
    document.getElementsByClassName("cart-total-price")[0].innerText = total + ".000" + ' VNĐ'
    localStorage.setItem("sumprice", total)
  } else if (total >= 1000) {
    let newtotal = (String(total)).substring(0, 1) + "." + (String(total)).substring(1) 
    console.log(newtotal)
    localStorage.setItem("sumprice", newtotal)
    document.getElementsByClassName("cart-total-price")[0].innerText = newtotal + ".000" + ' VNĐ'
    
  }
  
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}



let add_cart = document.getElementsByClassName("btncart");
console.log(add_cart)
for (let i = 0; i < add_cart.length; i++) {
  let add = add_cart[i];
  add.addEventListener("click", function (event) {
    console.log(add_cart[i])
    let button = event.target;
    let product = button.parentElement;
    console.log(product)
    let img = product.getElementsByClassName("prd")[0].src
    let title = product.getElementsByClassName("content-product-h3")[0].innerText
    let price = product.getElementsByClassName("price")[0].innerText
    console.log(price)
    addItemToCart(title, price, img)
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    event.preventDefault
    // modal.style.display = "block";
    updatecart()
  })
}



function addItemToCart(title, price, img) {
  let cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  let cartItems = document.getElementsByClassName('cart-items')[0]
  let cart_title = cartItems.getElementsByClassName('cart-item-title')
  // Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
  for (let i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
      return
    }
  }
  let cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (event) {
    let button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    event.preventDefault
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}


// xóa cart
let remove_cart = document.getElementsByClassName("btn-danger");
for (let i = 0; i < remove_cart.length; i++) {
  let button = remove_cart[i]
  button.addEventListener("click", function (event) {
    let button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
}

// thay đổi số lượng sản phẩm
let quantity_input = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantity_input.length; i++) {
  let input = quantity_input[i];
  input.addEventListener("change", function (event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}







//data 
var dataProducts = [
    {
        id: 1,
        img:'./image/product-7.png',
        name:'Cà Rốt',
        price: "12.000",
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
    {
        id: 2,
        img:'./image/product-2.png',
        name:'Hành Tím',
        price: "10.000",
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
    {
        id: 3,
        img:'./image/product-3.png',
        name:'Thăn bò',
        price: "250.000",
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
     {
        id: 4,
        img:'./image/product-5.png',
        name:'Khoai tây',
        price: "12.000",
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
       {
        id: 5,
        img:'./image/product-8.png',
        name:'Chanh tươi',
        price: "7.000",
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
       {
        id: 6,
        img:'./image/product-6.png',
        name:'Bơ tươi',
        price: "30.000",
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
       {
        id: 7,
        img:'./image/product-1.png',
        name:'Cam tươi',
        price: "50.000",
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
]

let inputSearch = document.querySelector('.header .search-form input');
let searchBtn = document.querySelector('.header .search-form a');
let getDivProduct = document.querySelector('.container');
let getBackgroundPlace = document.querySelector('.container-background');
let getHomeSection = document.querySelector('.home');
let getFeaturesSection = document.querySelector('.features');
let searchHint = document.querySelector('.header .search-form .search-hint');
let getBtnHome = document.querySelector('.home-btn');
let getBtnFeatures = document.querySelector('.features-btn');

// Hint
inputSearch.onclick = function() {
  searchHint.style.display="block";
}

window.onscroll = () => {
    searchHint.style.display = "none";  
}

// Container when fail
let CreateProductContainerFail = function(){
    
    let containerProduct = document.createElement('div'); // container product
    let boxProduct = document.createElement('div'); // box product
    let img = document.createElement('img'); // img
    let nameProduct = document.createElement('h3'); // name product
    let price = document.createElement('div'); // price
    let rate = document.createElement('div'); // stars
    // let btn = document.createElement('a'); 
    let productInfo = document.createElement('div'); // product info
    let productHeader = document.createElement('div'); // product header
    let prodcucth3 = document.createElement('h3'); //prodcut h3 
    let productName = document.createElement('div'); // product name
    let productDesc = document.createElement('h3'); // product description
    let productP = document.createElement('p'); // product description

    getDivProduct.appendChild(containerProduct).classList.add('container-product');
    containerProduct.appendChild(boxProduct).classList.add('box-product');
    boxProduct.appendChild(img).src = './image/empty_cart.jpg';
    boxProduct.appendChild(nameProduct);
    boxProduct.appendChild(price).classList.add('price');
    boxProduct.appendChild(rate).classList.add('stars');
    // boxProduct.appendChild(btn).classList.add('btn');
    // boxProduct.appendChild(btn).innerHTML = 'Thêm sản phẩm';
    
    containerProduct.appendChild(productInfo).classList.add('product-info');
    productInfo.appendChild(productHeader).classList.add('product-header');
    productHeader.appendChild(prodcucth3).innerHTML = 'Tên sản phẩm';
    productHeader.appendChild(productName).classList.add('product-name');
    productInfo.appendChild(productDesc).innerHTML = 'Thông tin sản phẩm';
    productInfo.appendChild(productP).innerHTML = 'rất tiếc ! Sản phẩm bạn tìm kiếm không có !';
}

// Container when success
let CreateProductContainerSuccess = function(){
    let containerProduct = document.createElement('div'); // container product
    let boxProduct = document.createElement('div'); // box product
    let img = document.createElement('img'); // img
    let nameProduct = document.createElement('h3'); // name product
    let price = document.createElement('div'); // price
    let rate = document.createElement('div'); // stars
    let btncart = document.createElement('a'); // a tag
    let productInfo = document.createElement('div'); // product info
    let productHeader = document.createElement('div'); // product header
    let prodcucth3 = document.createElement('h3'); //prodcut h3 
    let productName = document.createElement('div'); // product name
    let productDesc = document.createElement('h3'); // product description
    let productP = document.createElement('p'); // product description

    getDivProduct.appendChild(containerProduct).classList.add('container-product');
    containerProduct.appendChild(boxProduct).classList.add('box-product');
    boxProduct.appendChild(img);
    boxProduct.appendChild(nameProduct);
    boxProduct.appendChild(img).classList.add('prd')
    boxProduct.appendChild(nameProduct).classList.add('content-product-h3')
    boxProduct.appendChild(price).classList.add('price');
    boxProduct.appendChild(rate).classList.add('stars');
    boxProduct.appendChild(btncart).classList.add('btncart-search');
    // btncart.setAttribute("id","btns")
    boxProduct.appendChild(btncart).innerHTML = 'Thêm sản phẩm';
    
    containerProduct.appendChild(productInfo).classList.add('product-info');
    productInfo.appendChild(productHeader).classList.add('product-header');
    productHeader.appendChild(prodcucth3).innerHTML = 'Tên sản phẩm';
    productHeader.appendChild(productName).classList.add('product-name');
    productInfo.appendChild(productDesc).innerHTML = 'Thông tin sản phẩm';
    productInfo.appendChild(productP);  
  
    // Thêm giỏ hàng khi tìm thấy sp
    let add_carts = document.getElementsByClassName("btncart-search");
    for (let j = 0; j < add_carts.length; j++){
      add_carts[j].addEventListener("click", function (event) {
        
        let buttons = event.target;
        let product = buttons.parentElement.parentElement;
        console.log(product)
        let imgs = product.getElementsByClassName("prd")[0].src
        let titles = product.getElementsByClassName("content-product-h3")[0].innerText
        let prices = product.getElementsByClassName("price")[0].innerText
        console.log(prices)
        addItemToCart(titles, prices, imgs)
        // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
        event.preventDefault
        // modal.style.display = "block";
        updatecart()
        })
    }
}


// Logic Find Product
let check = function(){
    getHomeSection.style.display="none";
    getFeaturesSection.style.display="none";
    getBackgroundPlace.classList.add('active');
    searchForm.classList.remove('active');
    getDivProduct.classList.add('active','grid','wide');
    getBtnHome.href = './index.html';
    getBtnFeatures.href = './index.html';

    // Find Product
    var getProductName = dataProducts.map(function(product){
        return {   
                id : `${product.id}`,
                name: product.name.toLowerCase().trim(),
                url: product.img,
                rate: product.rate,
                price: product.price,
                desc: product.desc
            }
    })

    var productFound = [];
    for(i of getProductName) {
        if(!inputSearch.value.replace(/\s+/g, '')){
            // CreateProductContainerFail();
            break;
        }

        if(i.name.toLowerCase().trim().includes(inputSearch.value.toLowerCase().trim())){
            productFound.push(i);
        } 
    }

    //Check Product Found 
    if(!productFound.toString()){
        CreateProductContainerFail();
    }

    // Create Prodcuct container
    // Product 
    for(let i = 0; i < productFound.length; i++){
        CreateProductContainerSuccess();
    } 

    // Logic show products
    // Put info into DOM
    let getImgs = document.querySelectorAll('.box-product img');    
    let getH3s = document.querySelectorAll('.box-product h3');    
    let getPrices = document.querySelectorAll('.box-product .price');    
    let getStarss = document.querySelectorAll('.box-product .stars'); 
    
    let getProductNames = document.querySelectorAll('.product-info .product-header .product-name');
    let getProductPs = document.querySelectorAll('.product-info p');
    
    //Product Name
    Array.from(getH3s).map(function(h3){
        for(let i= 0; i < productFound.length; i++){
            if(Array.from(getH3s).indexOf(h3) === productFound.indexOf(productFound[i])){
                h3.innerHTML = productFound[i].name;
            }
        }
    })

    //Product img
    Array.from(getImgs).map(function(img){
        for(let i= 0; i < productFound.length; i++){
            if(Array.from(getImgs).indexOf(img) === productFound.indexOf(productFound[i])){
                img.src = productFound[i].url;
            }
        }
    })

    // Product Rate
    Array.from(getStarss).map(function(star){
        for(let i= 0; i < productFound.length; i++){
            if(Array.from(getStarss).indexOf(star) === productFound.indexOf(productFound[i])){
                star.innerHTML = productFound[i].rate;
            }
        }
    })

    // Product Price
    Array.from(getPrices).map(function(price){
        for(let i= 0; i < productFound.length; i++){
            if(Array.from(getPrices).indexOf(price) === productFound.indexOf(productFound[i])){
                price.innerHTML = productFound[i].price + ' VND';
            }
        }
    })

    //Product Name H3
    Array.from(getProductNames).map(function(name){
        for(let i= 0; i < productFound.length; i++){
            if(Array.from(getProductNames).indexOf(name) === productFound.indexOf(productFound[i])){
                name.innerHTML = productFound[i].name;
            }
        }
    })

    // Product Info
    Array.from(getProductPs).map(function(p){
        for(let i= 0; i < productFound.length; i++){
            if(Array.from(getProductPs).indexOf(p) === productFound.indexOf(productFound[i])){
                p.innerHTML = productFound[i].desc;
            }
        }
    })   
}

//Search
var first_click = true;
searchBtn.onclick = function() {
    if(first_click){
        check();
        first_click = false;
    }
    else {
        // Remove Current Product
        let currentProducts = getDivProduct.querySelectorAll('.container-product');
        Array.from(currentProducts).map(function(currentProduct){
            currentProduct.remove();
        })
        check();
    }   
}