var nombreX = 'hijo de window';
var tag = document.getElementsByTagName('article')[0].getElementsByTagName('li')[0];

var counter = 0;

var intervalo = function(argument) {
	var div = document.getElementsByTagName('div')[0];
	console.log(div.classList)
	// console.log(counter++);
}
setTimeout(intervalo,1);
// setInterval(intervalo,1000);

var p = document.getElementById('parrafo');

// Forma A
// var animar = function(){
// 	var counter = 100;
// 	var interval = setInterval(function(){
// 		var div = document.getElementsByTagName('div')[0];

// 		div.style.left = ((counter++) + 'px');
// 		if(counter>400){
// 			clearInterval(interval);
// 		}
// 		// console.log(counter++);
// 	},1);
// }

// Forma B
// var animar = function(){
// 	var div = document.getElementsByTagName('div')[0];
// 	div.style.transition = 'left .5s';
// 	setTimeout(function(){
// 		div.style.left = '400px';
// 	},2);
// }

// setInterval(function(){
// 	div.
// },1);