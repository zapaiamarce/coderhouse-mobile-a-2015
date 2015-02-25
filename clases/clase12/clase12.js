
var onLoad = function(){
	window.miForm = document.querySelector('form');
	window.lista = document.querySelector('ul.lista');
	
	// lista.addEventListener('mouseover',function(event){
	// 	console.log(this)
		
	// })

	// list.onclick = function(){
	// 	console.log('otra forma de escuchar un evento')
	// }

	// document.body.addEventListener('mouseover',function(e){
	// 	console.log('this',this)
	// 	console.log('target',e.target);
	// })

	// miForm.addEventListener('submit',function(e){
	// 	if(e.target.algoQueElUsuarioPuso.value != 'enviar'){
	// 		e.preventDefault();
	// 	}
	// })

	// document.body.addEventListener('mouseover',function(e){
	// 	console.log('this',this)
	// 	console.log('target',e.target);
	// })

}

window.addEventListener('load',onLoad);