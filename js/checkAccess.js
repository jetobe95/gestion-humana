window.onload=starting;
var elements
function starting(){
	elements=document.getElementById("form-sign");
	elements.addEventListener("submit", check, false);

}

function check(event){

	event.preventDefault();

	var userc=event.target.email.value;
	var passw=event.target.password.value;

	firebase.auth().signInWithEmailAndPassword(userc, passw)
	.then(function(){
		alert("Bienvenido");
		window.location.href="index.html";
	})

	.catch(function(error) {
	  // Handle Errors here.
	  alert("Verifique datos e ingrese de nuevo");
	  
		});
	
}
