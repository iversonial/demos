/**
 * Created by Administrator on 2016/4/5.
 */
'use strict';

angular.module('adminApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': '首页',
      'link': '/'
    },{
      'title': '登陆',
      'link': '/admin'
    },{
        'title': '注册',
        'link': '/admin'
      },{
        'title': '我的订单',
        'link': '/boughtlist',
        'up': '∧',
        'down' : '∨'
      },{
        'title': '购物车',
        'link': '/carlist'
      },{
        'title': '收藏',
        'link': '/storelist'
      },{
        'title': '二维码',
        'link': '#'
      },
      {
        'title': '退出',
        'link': '/mBuyM'
      }];

    $scope.isActive = function(route) {
      return route === $location.path();
      //return route === '/';
    };
  });
