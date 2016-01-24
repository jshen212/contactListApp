var myApp=angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope', '$http', function($scope,$http){
  console.log('hello world from controller');

  $http.get('/contactlist').success(function(response){
    console.log('i got the data');
    $scope.contactlist=response;
  });

  $scope.addContact= function(){
    console.log('button click');
  };


}]);
