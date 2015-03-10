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

.controller('BuscadorCtrl',function($scope,meli){
	$scope.busqueda = function(){
		meli.buscar($scope.searchText).success(function(res){
			console.log(res)
			$scope.productos = res.results;
		})
		
	}
})