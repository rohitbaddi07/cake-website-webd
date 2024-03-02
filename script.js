// MOUSE EVENTS
// onmousedown and onmouseup
function mouseDown() {
  document.getElementById("myP").style.color = "red";
}


function mouseUp() {
  document.getElementById("myP").style.color = "blue";
}


// onclick
function myFunction1() {
    alert("Added to cart successfully.");
}


// onmouseover and onmouseout
function bigImg(x) {
    x.style.height = "20rem";
    x.style.width = "20rem";
}
  
  function normalImg(x) {
    x.style.height = "10rem";
}


// ondblclick
function ondblclick1() {
    document.getElementById("demo").style.color="red";
}






// FORM EVENTS
// onfocus
function onfocus1(x) {
  x.style.background = "#ccffcc";
}

// onblur
function onblur1(p) {
  p.value = p.value.toUpperCase();
  p.style.background="";
  }

// onchange
function onchange1() {
  var x = document.getElementById("ice").value;
  document.getElementById("Flavour").innerHTML = "You selected: " + x;
}

// onsubmit
function onsubmit1()
{
	alert("Form was successfully submitted")
}

// onreset
function onreset1() {
  alert("The form was reset");
}

// Onselect
function onselect1(){
  alert("selected some text.");
}



// validation
function validateForm() {
	// Name Validation
	var regName = /\d+$/g;
	var name = document.getElementById('name').value;
	if (name == '' || regName.test(name)) {
		window.alert('Please enter your name properly.');
		name.focus();
		return false;
	}

	// Email Validation
	var regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;
	var email = document.getElementById('email').value;
	if (email == '' || !regEmail.test(email)) {
		window.alert('Please enter a valid e-mail address.');
		email.focus();
		return false;
	}

	// Phone Validation
	var regPhone = /^\d{10}$/;
	var phone = document.getElementById('om').value;
	if (phone == '' || !regPhone.test(phone)) {
		window.alert('Please enter valid phone number.');
		phone.focus();
		return false;
  }
}