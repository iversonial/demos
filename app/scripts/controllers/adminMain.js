/**
 * Created by Administrator on 2016/4/5.
 */

angular.module('adminApp')
  .controller('myUpdown', function ($scope,$http) {
    $scope.upToInf = function(){
      this.name = "What";
      this.num = 23;
      $http.get("/data/inf.php")
        .success(function (response) {$scope.names = response.records;});
    };
  });
/*
angular.module('adminApp')
  .controller('myTuanGou', function ($scope) {
    $scope.items = items;
    $scope.boughtList = boughtList;
    $scope.formList = formList;
    $scope.storetList = storeList;

  });
*/
    /*
     $http.get('/api/awesomeThings').success(function(awesomeThings) {
     $scope.awesomeThings = awesomeThings;
     });
     */
