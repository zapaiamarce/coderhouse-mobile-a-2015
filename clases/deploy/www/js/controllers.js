angular.module('starter')

.controller('BuscadorCtrl',function($scope,meli){
	$scope.busqueda = function(){
		meli.buscar($scope.searchText).success(function(res){
			console.log(res)
			$scope.productos = res.results;
		})
		
	}
})