window.addEventListener('load',function () {
	var button = document.querySelector('button');
	var nav = document.querySelector('nav');
	window.nav = nav;
	button.addEventListener('click',function(){
		nav.classList.toggle('abierto');
	})
})