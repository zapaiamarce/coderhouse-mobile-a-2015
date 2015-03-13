angular.module('starter')
.factory('meli',function ($http) {

	var buscar = function(q) {
		return $http.get('https://api.mercadolibre.com/sites/MLA/search?limit=200&condition=new&sort=price_asc&q='+q);
	}

	return {
		buscar:buscar
	}
})