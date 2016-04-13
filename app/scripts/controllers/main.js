'use strict';
/*
angular.module('demosApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
  */
angular.module('demosApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http({
      method:'GET',
      url:'/api/awesomeThings',
    }).success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    /*
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    */
  });
