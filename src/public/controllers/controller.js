var myApp = angular.module('myApp', [])

.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

  var refresh = function(){
    $http.get('/contactlist').success(function(response){
      // console.log('i received the get request');
      $scope.contactlist = response;
      // console.log($scope.contactlist);
      $scope.contact = '';
    });
  };

  refresh();

  $scope.addContact = function(){
    console.log('add contact clicked', $scope.contact);
    $http.post('/contactlist', $scope.contact).success(function(response){
      console.log(response);
      refresh();
    });
  };

  $scope.remove = function(id){
    console.log(id);
    $http.delete('/contactlist/' + id).success(function(response){
      refresh();
    });
  };

  $scope.edit = function(id){
    console.log(id);
    $http.get('/contactlist/' + id).success(function(response){
      console.log(response);
      $scope.contact = response;
    });
  };

  $scope.update = function(){
    console.log($scope.contact._id);
    $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
      refresh();
    });
  };

  $scope.deselect = function(){
    $scope.contact = '';
  };

}]);
