'use strict';

angular.module('demosApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'About',
      'link': '/admin'
    },
    {
      'title': 'Contact',
      'link': '#'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
      //return route === '/';
    };
  });
