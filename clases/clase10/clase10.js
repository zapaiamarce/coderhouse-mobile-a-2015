var li = document.createElement('li');
var tr = document.createElement('tr');

var fragment = document.createDocumentFragment();
fragment.appendChild(new Option('test','4'));

tr.innerHTML = '<td>Columna1</td><td>Columna2</td>'
var pepe = function(tete,lele){

}
// var guardarNombre = function () {
// 	var input = document.getElementById('nombre');
// 	var valor = input.value;
// 	localStorage.setItem('nombre',valor);
// }

// var devolverNombre = function(){
// 	var currentNombre = localStorage.getItem('nombre');
// 	document.getElementById('nombre').value = currentNombre;
// }

var pedro = {
	name:"pedro",
	apellido:"perez",
	edad:30,
	childs:[{
		name:'hijo1',
		edad:4
	},{
		name:'hijo2',
		edad:8
	}],
	pepe:function(tete,lele){}
}

// localStorage.setItem('objeto',JSON.stringify(pedro));

// devolverNombre();