var Proto = function(lista){
	this.lista = lista;
	this.met = function(){
		console.log(this);
	}
}
Proto.prototype.nombre = 'Proto';
Proto.prototype.recorrer = function() {
	var items = this.lista.getElementsByTagName('li');

	for (var i = 0; i < items.length; i++) {

		// var algo = (x > 5) ? 'mayor a 5':'menor a 5';

		items[i].className = (parseInt(items[i].innerText) % 2 == 0) ? 'red' : '';
	};
};

var inst = new Proto(document.getElementById('lista'));