function login(){
	var name = document.getElementById("nombre").value;
	var passw = document.getElementById("contraseña").value;
	if ((name == "fernando") && (passw == "comillas")){
		window.alert("Has iniciado correctamente");
	}
}
function search(){
	var search = document.getElementById("search").value;
}
function extra(){
	window.location.href="./Extra.html"
}
function comics(){
	window.location.href="./Comics.html"
}
function