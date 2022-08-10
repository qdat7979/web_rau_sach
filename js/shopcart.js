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


// Thêm hàng vào giỏ
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

