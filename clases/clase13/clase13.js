// $(function(){
// 	$('section#main ul li').click(function(){
// 		console.log($(this).after('<span>Hola</span>'))
// 		// console.log(this.after)
// 	})

// 	$('section#main ul li').click(function(){
// 		console.log('test 2')
// 	})
// });

$(function(){
	console.log('A');
	var url = 'https://api.mercadolibre.com/sites/MLA/search?q=ipod';

	var callback = function(data){
		console.log('C');
		// console.log(data)
		for (var i = 0; i < data.results.length; i++) {
			console.log(data.results[i].title)
		};
	}

	$.getJSON(url,callback);

	console.log('B');

	var Proto = function(list){
		this.el = $(list);

		this.el.find('li').on('click',function(){
			var jqueryEl = $(this);

			$(jqueryEl).remove();
		})
	}

	Proto.prototype.borrarPorValor = function(valor){
		this.el.find('li:contains("'+ valor +'")').remove();
	}

	var instanciaDeProto = new Proto($('section.tp ul.lista'));
	window.externa = instanciaDeProto;

	$('section.tp form[name=miForm]').on('submit',function(e){
		e.preventDefault();
		var valorDelInput = $(this.algoQueElUsuarioPuso).val();
		instanciaDeProto.borrarPorValor(valorDelInput);
	})
});