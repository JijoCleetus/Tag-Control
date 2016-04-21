var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    $scope.mytags = {};
    
    $scope.addTag = function (keyevent) {
        if (keyevent.which === 13) {
            if ($scope.tag != "")
            {
                $scope.mytags[$scope.tag] = $scope.tag;
                $scope.tag = "";
            }
            
        }
  }
    $scope.cleartag=function(idn)
    {
        delete $scope.mytags[idn];
    }
});