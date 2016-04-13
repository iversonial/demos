'use strict';

angular.module('demosApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  });
//=============
angular.module('adminApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'partials/adminMain',
        //controller: 'deCtrl'
      }).when('/mBuyM', {
        templateUrl: 'partials/tuangou',
        //controller: 'deCtrl'
        controller: 'myTuanGou',
      }).when('/moreVideo', {
        templateUrl: 'partials/video',
        //controller: 'deCtrl'
      }).when('/pToP', {
        templateUrl: 'partials/superMar',
        //controller: 'deCtrl'
        controller: 'myUpdown',
      }).when('/boughtlist', {
        templateUrl: 'partials/buyList',
        //controller: 'deCtrl'
      }).when('/carlist', {
        templateUrl: 'partials/formList',
        //controller: 'deCtrl'
      }).when('/storelist', {
        templateUrl: 'partials/storeList',
        //controller: 'deCtrl'
      }).otherwise({
        redirectTo: '/admin'
      });
    $locationProvider.html5Mode(true);
  });


