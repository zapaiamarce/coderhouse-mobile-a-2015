// console.log = function(){}

// variablo inicializada sin valor
var primerNombre;
//asignación del valor
primerNombre = 'luis';

// Variables con valor inicial
var segundoNombre = 'pepe';
var edad = 4;
var listaDeNombres;

// variables a partir de otras variables
var numero = edad + 3;
	numero = edad - 3;
	numero = edad * 3;
	numero = edad / 3;

numero = 'pepe';

// variable del tipo array
listaDeNombres = ['pepe',134,edad];

// objeto
var persona = { 
	nombre:'Juan', 
	edad:30, 
	hijos:{},
	perros:['boby','tito'] 
}	

var suma = function(numUno,numDos) {
	var resultado = numUno + numDos;
	return resultado;
}

var consoleObj = function(obj) {
	console.log('esto viene de la función');
	console.log(obj);
}

// consoleObj({nombre:'pepe'});
/*
*/

var copiaDeSuma = suma;

var sumaDeDosNumeros = suma(3,56);

var mayorDeEdad = true;

if(edad > 5){
	var nombre = 'carlos';
	console.log(nombre); 
}else{
	console.log('else');
}

if(edad > 5){
	var nombre = 'carlos';
	console.log(nombre); 
}else if(edad > 10){
	console.log('else if');
}else{
	console.log('ultimo else');
}

var viejaEdad = ++edad;
console.log('>>>>>>>>>>>')

for(var gt = 0; gt < listaDeNombres.length; gt++){
	console.log(listaDeNombres[gt]);
};


