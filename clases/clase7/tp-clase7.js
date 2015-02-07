var obj = {};

var nombreCompletoGenerico = function(){
	console.log(this.nombre + ' ' + this.apellido);		
}

var persona = {
	nombre:'pepe',
	apellido:'lopez',
	edad:30,
	datos:{
		otrodato:'texto',
		algomas:14
	},
	// nombreCompleto:nombreCompletoGenerico,
	nombreCompleto:function(){
		return this.nombre + ' ' + this.apellido;
	},
	hijos:[
		{
			nombre:'hijo1',
			edad:10
		},
		{
			nombre:'hijo2',
			edad:12
		},
		{
			nombre:'hijo3',
			edad:3
		}
	]
}

for(var i in persona.hijos){
	if(persona.hijos[i].edad > 5){
		console.log(persona.hijos[i].nombre);
	}
}

var arr =  ['uno','dos','tres'];

var personaDos = {
	nombre:'norma',
	apellido:'perez',
	edad:30,
	datos:{
		otrodato:'texto',
		algomas:14
	},
	nombreCompleto:nombreCompletoGenerico
}

// for(var tr in persona){
// 	console.log(tr);
// 	// var attr = 'nombre';
// 	// persona.nombre
// 	// persona['nombre']
// 	// persona[attr]
// 	console.log(persona[tr]);
// }


//forma 1 if
// var mayorDeEdad = false

// if(persona.edad > 25){
// 	mayorDeEdad = true;
// }

//forma 2 if
var mayorDeEdad = (persona.edad > 25) ? 'mayor' : 'menor';






var elMetodoDelObjeto = persona.nombreCompleto;

var nombreLalala = 'pedro';
// var apellido = 'garcia';

var suma = function(func){
	var apellido = 'perez';
	console.log(apellido);
	// console.log(func)
	// func();
}



// suma(function(){ console.log('funcion interna') });

