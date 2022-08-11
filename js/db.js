//data 
var dataProducts = [
    {
        id: 1,
        img:'./image/product-7.png',
        name:'Cà Rốt',
        price: 12000,
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    },
    {
        id: 2,
        img:'./image/product-2.png',
        name:'Hành Tím',
        price: 10000,
        rate: '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i>',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, vel.',
    }
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
    let btn = document.createElement('a'); // a tag
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
    boxProduct.appendChild(price).classList.add('price');
    boxProduct.appendChild(rate).classList.add('stars');
    boxProduct.appendChild(btn).classList.add('btn');
    boxProduct.appendChild(btn).innerHTML = 'Thêm sản phẩm';
    
    containerProduct.appendChild(productInfo).classList.add('product-info');
    productInfo.appendChild(productHeader).classList.add('product-header');
    productHeader.appendChild(prodcucth3).innerHTML = 'Tên sản phẩm';
    productHeader.appendChild(productName).classList.add('product-name');
    productInfo.appendChild(productDesc).innerHTML = 'Thông tin sản phẩm';
    productInfo.appendChild(productP);   
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