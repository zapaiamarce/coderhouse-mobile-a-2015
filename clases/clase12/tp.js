window.addEventListener('load',function() {
	
	var ProtoLista = function(lista){
		var that = this;
		this.lista = lista;
		
		// esta es la opción que recomiendo
		this.lista.addEventListener('click',function(e){
			if(e.target.parentNode == that.lista && e.target.tagName == 'LI'){

				e.target.parentNode.removeChild(e.target);
			}
		})

		// opcion A
		// var lis = this.lista.querySelectorAll('li');
		// for (var i = 0; i < lis.length; i++) {
		// 	lis[i].addEventListener('click',function(e){
		// 		e.target.parentNode.removeChild(this);
		// 	})
		// };

		// pequeña variante de lo anterior
		// var lis = this.lista.querySelectorAll('li');
		// var listenerDeLi = function(e){
		// 	e.target.parentNode.removeChild(this);
		// }
		// for (var i = 0; i < lis.length; i++) {
		// 	lis[i].addEventListener('click',listenerDeLi);
		// };


	}

	ProtoLista.prototype.borrarPorValor = function(valor) {
		var lis = this.lista.querySelectorAll('li');
		for (var i = 0; i < lis.length; i++) {
			if(lis[i].innerText == valor){
				// Para borrar un nodo se debe recurrir al padre.
				// Desde el padre se ejecuta el metodo removeChild
				// Y este metodo recibe una referencia (puntero) al hijo
				// Osea que en este caso tenemos que ascender al padre
				// usando parentNode y luego hacer removeChild de el li en 
				// esta vuelta de "for"

				lis[i].parentNode.removeChild(lis[i]);
			}
		};
	};

	var ul = document.querySelector('ul.lista');
	var unaInstanciaDeProtoLista = new ProtoLista(ul);

	var form = document.querySelector('form[name=miForm]');
	form.addEventListener('submit',function(e){
		e.preventDefault();
	});
	form.addEventListener('submit',function(e){
		var form = e.target;
		var valorDelInput = form.algoQueElUsuarioPuso.value;
		// select
		// console.log(form.edad.value)

		// radio buttons
		// console.log(form.mayor.value)
		unaInstanciaDeProtoLista.borrarPorValor(valorDelInput);
		form.algoQueElUsuarioPuso.focus();
		
	});
	window.pepe = unaInstanciaDeProtoLista;
});