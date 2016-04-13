/**
 * Created by Administrator on 2016/4/7.
 */

angular.module('adminApp')
  .controller('myTuanGou', function ($scope) {
    $scope.items = items;
    $scope.boughtList = boughtList;
    $scope.formList = formList;
    $scope.storetList = storeList;

    //$scope.testing = '12345';

    //search
    $scope.mySearch = function($event){
      //var obj = document.getElementById("change_repeat");
      //obj.setAttribute("ng-repeat") == "value in items | filter:tgName | filter:tgBra | filter:tgVal";
      document.getElementById("change_repeat").setAttribute("ng-repeat","value in items | filter:tgName | filter:tgBra | filter:tgVal");

    }
    //buyAction
    $scope.buyAction = function($event){
      /*
      var event = $event || window.event;
      var obj = event.target;
      var names = obj.getAttribute('name');
      alert(names)
      */

      //console.log(name)
      $scope.items[0].number-=1;

      document.getElementById('tableList').style.display = 'none';
      document.getElementById('buyList').style.display = 'block';

    }
    //buySubmit
    $scope.buySubmit = function($event){
      document.getElementById('tableList').style.display = 'block';
      document.getElementById('buyList').style.display = 'none';

    }

    //formAction
    $scope.carAction = function($event){

    }

    //storeAction
    $scope.storeAction = function($event){

    }
  });
