function search (){
	var busca = document.getElementById('buscador').value;
	var buscafull = "https://www.google.com/search?q=".concat("", busca);
	window.open(buscafull)
}
function Wikipedia(){
	var wbusca = document.getElementById('wiki').value;
	var wfull = "https://es.wikipedia.org/wiki/".concat("", wbusca)
	window.open(wfull)
}