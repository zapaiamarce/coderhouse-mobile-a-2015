// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','coderhouse'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

var miModulo = angular.module('coderhouse',[]);

miModulo.factory('Meli',function($http){
  
  return {
    datosDelPais:function(codigoPais){
      return $http.get('https://api.mercadolibre.com/sites/'+codigoPais);
    }
  }
})

miModulo.controller('ListaDeCosasCtrl',function(Meli,$scope){
  // console.log(Meli)
  // Meli.datosDelPais('MLB');

  $scope.buscarInfo = function() {
    Meli.datosDelPais($scope.codigoPais).success(function(respuesta){
      $scope.data = respuesta;
    });
  }
  
  // $scope.nombre = 'Carlos';
  // $scope.lista = ['pablo','carlos','pepe'];
  // $scope.$watch('apellido',function() {
  //   console.log(CrearUsuario);
  //   console.log($scope.apellido);
  // })
  // $scope.mostrarApellido = function() {
  //   alert($scope.apellido);
  // }
})

// Tambien se puede hacer asi

// angular.module('coderhouse',[])
// .controller('ListaDeCosasCtrl',function(){

// })