// $('form').submit(function(){})

// esto se ejecuta cuando el DOM termina de cargar
$(function(){
	var Result = function(data){
		this.data = data;
	}

	Result.prototype.getHTML = function() {
		var html = '<div>'+this.data.title+'</div>';
		return $(html);
	};
	
	var callback = function(papa){
		var resultados = papa.results;

		for (var i = 0; i < resultados.length; i++) {
			var result = new Result(resultados[i]);
			var html = result.getHTML();
			$('section.results').append(html);
		};
	}

	$('form').on('submit',function(e) {
		var q = this.search.value;
		var url = 'https://api.mercadolibre.com/sites/MLA/search?q='+q;
		console.log(this.search.value);
		console.log(url);
		$.getJSON(url,callback)

		e.preventDefault();
	});
})