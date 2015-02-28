$(function(){
	var Resultado = function(data){
		this.data = data;
	}

	Resultado.prototype.overImage = function(){

	}
	Resultado.prototype.generateHTML = function(){
		// var html = $('<div><a href="' + this.data.permalink + '"><h1>' + this.data.title +'</h1></a><img src="' + this.data.thumbnail +'"></div>');

		var html = Mustache.render($('#template').html(), this.data);

			// html.find('img').on('mouseover',this.overImage);

		return $(html);
	}

	var buscador = {
		buscar:function(q){
			var that = this;
			var url = 'https://api.mercadolibre.com/sites/MLA/search?q='+q;
			// var callback = function(){

			// }
			// $.getJSON(url,callback);
			$.getJSON(url,function(data){
				// for (var i = 0; i < data.results.length; i++) {
				// 	that.agregarResultado(data.results[i]);
				// };
				console.log(data)

				var resultHTML = Mustache.render($('#templateCollection').html(), data);
				$('section.results').html(resultHTML);

			});
		}
		// ,agregarResultado:function(resultado){
		// 	var res = new Resultado(resultado);
		// 	res.generateHTML().appendTo($('section.results'));
		// }
	}

	$('form.search').on('submit',function(evento){
		evento.preventDefault();

		var q = this.search.value;
		buscador.buscar(q);
	})


});