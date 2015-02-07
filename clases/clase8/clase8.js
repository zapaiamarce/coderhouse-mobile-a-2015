var edad = 15;
var nombre = 'luis';
var arr = ['uno','dos','tres'];
var arrNum = [2,5,2,12,121212,2,221,9];
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis hic totam ea repudiandae placeat, amet reprehenderit deleniti consequuntur nisi explicabo porro possimus, vero molestias. Omnis beatae temporibus repellat accusantium laudantium?';

var imprimeNombre = function(obj){
  console.log(obj.nombre);
}

var devuelvePersona = function(){
  return {
    nombre:'pedro'
  }
}

// imprimeNombre(devuelvePersona());

// pésima práctica
// var arr = [1,2,3,4,5,6,7];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if(arr[i] == 4){
//     break;
//   }
// };
var obj = {
  pedro:function(){
    console.log('es pedro');
  },
  juan:function(){
    console.log('es juan');
  }
}

if(nombre === 'luis'){
  console.log('es luis');
}



// console.log(obj[devuelvePersona().nombre]());

// var i = 1;
// while(i < 20){
//   console.log('se cumple ' + i);
//   i++;
// }

// switch (devuelvePersona().nombre) {
//   case 'pedro':
//     console.log('es pedro');
//   break;
//   case 'juan':
//     console.log('es juan');
//   break;
//   default:
//     console.log('no es ninguno');
//   break;
// }

//console.log(typeof nombre)

// toString
// push
// join
// sort
// shift
// unshift
// slice
// splice
var items = [
  { name: 'Sharpe', value: 37 },
  { name: 'Edward', value: 21 },
  { name: 'The', value: -12 },
  { name: 'And', value: 45 },
  { name: 'Zeros', value: 37 },
  { name: 'Magnetic' }
];

// items.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });


// var numbers = [4, 2, 5, 1, 3];

// numbers.sort(function(a, b) {
//   console.log(numbers)
//   console.log(a,b);
//   console.log(a - b);
//   // return a - b;
//   return a > b;
// });
// console.log(numbers);

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
console.log('Removed this element: ' + shifted);

// Prototipos

var Persona = function(nombre,apellido){
  var privado = 1234;
  this.nombre = nombre;
  this.apellido = apellido;
  this.random = Math.random(); 

  this.getPrivado = function(){
    return privado;
  }
}

Persona.prototype.tipo = 'Persona';

Persona.prototype.nombreCompleto = function(){
    return this.nombre  + ' ' + this.apellido;
}


// Persona.prototype = {
//   nombreCompleto:function(){
//       return this.nombre  + ' ' + this.apellido;
//   },
//   tipo:'Persona'
// }



var Child = function(){
  this.algo = 'algo';
} 

Child.prototype = new Persona();

Child.prototype.miMetodo = function(){
  console.log('test');
}


var p = new Persona();
