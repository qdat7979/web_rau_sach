const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const rsgbt = document.getElementById('register-btn');
const tb = document.getElementById("tb")
const tb2 =document.getElementById("tb2")
tb.style.display = "none"
tb2.style.display = "none"



// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	checkInputs();
// });

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;		
}



function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	
	if(emailValue === '') {
		setErrorFor(email, 'Email không được để trống');
		alert("Nhập email của bạn trước")
		return
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email không hợp lệ');
		alert("Sai định dạng email")
		return
	} else {
		setSuccessFor(email);
		document.getElementById("password").disabled = false
		document.getElementById("password2").disabled=false
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password không được để trống');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Xác nhận mật khẩu không được để trống');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Mật khẩu không khớp');
		rsgbt.addEventListener("click", () => {
		checkInputs();
		tb.style.display = "none"
		tb2.style.display = "none"
		})
	} else{
		setSuccessFor(password2);
		rsgbt.addEventListener("click", () => {
		checkInputs();
		tb.style.display = "block"
		tb2.style.display = "block"
		})
	}
	
}


