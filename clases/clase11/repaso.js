var nombre = 'pepe';

var imprimirNombre = function(argument) {
	var nombre = 'pedro';

	var imprimirSegundoNombre = function(){
		var nombre = 'sebastian';
		console.log(nombre);
	}

	imprimirSegundoNombre();

	console.log(nombre);
	console.log(this);
}
// console.log(tetetete);
var obj = {
	nombre:'pepe',
	apellido:'perez',
	nombreCompleto:function(){
		console.log(this.nombre + ' ' + this.apellido);
	}
}

// var 
// if()

var Persona = function(nombre,apellido){
	var pais = 'AR';
	this.nombre = nombre || 'pedro';
	this.apellido = apellido;
	
	this.getPais=function(){
		return pais;
	}
}

Persona.prototype.tipo = 'Persona';
Persona.prototype.nombreCompleto = function(){
	console.log(this.nombre + ' ' +this.apellido);
};

var tt = new Persona('tete','lopez');
var ll = new Persona('eleele','lopez');
var mm = new Persona('emeeme','lopez');
var rr = new Persona('ereere','lopez');