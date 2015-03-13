angular.module('controllers',[])
.controller('MyController',function($scope,$cordovaCamera,$cordovaGeolocation){
  $scope.items = [{},{},{},{}]
  
  $scope.photo = function(){
    $cordovaCamera.getPicture({
    	sourceType:0,
      quality: 50,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }).then(function(imageData) {
      console.log(imageData)
      
      $scope.imgSrc = imageData;
    }, function(err) {
      // error
    });
  }

  $scope.getLocation = function(){
    var posOptions = {timeout: 10000, enableHighAccuracy: false};

    $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      
      $scope.location = position;

      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });
  }

  $scope.doRefresh = function(){
    $scope.$broadcast('scroll.refreshComplete');
  }
})