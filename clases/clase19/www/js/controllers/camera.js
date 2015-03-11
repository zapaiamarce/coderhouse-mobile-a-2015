angular.module('starter').controller('CamerCtrl',function($scope){
    $scope.imgUrl = 'http://i.stack.imgur.com/eCxMy.jpg';
    $scope.sacarFoto = function() {
      var onSuccess = function(imageURI) {
          console.log(imageURI);
          $scope.imgUrl = imageURI;
          $scope.$digest();
          // var image = document.getElementById('myImage');
          // image.src = imageURI;
      }

      var onFail = function(message) {
          console.log('Failed because: ' + message);
      }

      navigator.camera.getPicture(onSuccess, onFail, { 
         quality: 50,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType:Camera.PictureSourceType.CAMERA
       });

    }
    
})