var nombreX = 'hijo de window';
var tag = document.getElementsByTagName('article')[0].getElementsByTagName('li')[0];

var counter = 0;

var intervalo = function(argument) {
	document.getElementsByTagName('div')[0].className = 'red final';
	// console.log(counter++);
}
// setTimeout(intervalo,3000);
setInterval(intervalo,1000);