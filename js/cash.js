// / modalcash
// Get the modal

let modalcash = document.getElementById("myModalcash");
console.log(modalcash)
document.querySelector("#tong").value = localStorage.getItem("sumprice")+".000"

// Get the button that opens the modal
let btncash = document.getElementById("submit");
let btnback=document.getElementById("back")
// Get the <span> element that closes the modal
let spancash = document.getElementsByClassName("cashclose")[0];
let choice = document.querySelector("#cash1")
let mobile = document.querySelector(".mobile")
let bank=document.querySelector(".bank")
let visa = document.querySelector("#credit1")
let pay=document.querySelector(".pay1")
visa.style.display = "none"
mobile.style.display = "none"
bank.style.display="block"

choice.onclick = function () {
    for (let i = 0; i <= 3; i++){
      switch (choice.value) {
        case "online":
              visa.style.display = "none"
              mobile.style.display = "none"
              bank.style.display="block"
              break;
        case "pay":
              visa.style.display = "none"
              mobile.style.display = "block"
              bank.style.display="none"
              break;
        case "credit":
              visa.style.display = "block"
              mobile.style.display = "none"
              bank.style.display="none"
              break; 
        case "home":
              visa.style.display = "none"
              mobile.style.display = "none"
              bank.style.display="none"
            break;
   
          default:
              visa.style.display = "none"
              mobile.style.display = "none"
              bank.style.display="block"
            break;
        
   }  
    }
   
}

// When the user clicks on the button, open the modal
btncash.onclick = function () {
    modalcash.style.display = "block";
    localStorage.removeItem("sumprice")
    document.querySelector("#tong").value =""
}
btnback.onclick = function Redirect() {
    window.location = "./index.html";
    localStorage.removeItem("sumprice")
    document.querySelector("#tong").value =""
}

// When the user clicks on <span> (x), close the modal
spancash.onclick = function () {
    modalcash.style.display = "none";
    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalcash) {
        modalcash.style.display = "none";
    }
}