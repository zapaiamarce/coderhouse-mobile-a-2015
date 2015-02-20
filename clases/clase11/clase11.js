var sectionMain = document.querySelector('section#main');
var lis = document.querySelectorAll('section#main li');
var tercerLi = document.querySelector('section#main li.tercero');
var unLi = document.querySelector('section#main li[data-pepe=ok]');
var myUl = document.querySelector('section#main ul');

var lisHeader = document.querySelectorAll('header nav ul li');

for (var i = 0; i < lis.length; i++) {
	lis[i].innerHTML = 'Contenido ' + i;
};

// Esto debería funcionar
var elUl = document.querySelector('ul');
var elSection = elUl.parenNode;

var myList = new Lista(elUl);
myList.borrarPorIndice(3);
myList.borrarPorDataId('ok');

// var elemento = document.createElement('li');
// elemento.innerHTML = 'nuevoLi';
// myList.agregarEnLaPosicion(3,elemento);
