angular.module('starter').controller('TestCtrl',function($scope,meli){
	$scope.buscarProducto=function() {
		meli.buscar($scope.inputDeBusqueda).success(function(res) {
			$scope.resultados = res.results;
		})
	}
})

.controller('HomeCtrl',function($scope){
	$scope.texto = 'esto viene del scope'
})