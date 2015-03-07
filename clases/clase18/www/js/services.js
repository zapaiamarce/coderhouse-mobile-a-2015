angular.module('starter')
.factory('meli',function ($http) {

	var buscar = function(q) {
		return $http.get('https://api.mercadolibre.com/sites/MLA/search?q='+q);
	}

	return {
		buscar:buscar
	}
})