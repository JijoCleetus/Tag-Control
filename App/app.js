var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    $scope.mytags = [];
    
    $scope.addTag = function (keyevent) {
        if (keyevent.which === 13) {
            $scope.mytags.push($scope.tag);
            $scope.tag = "";
        }
  }
    $scope.cleartag=function()
    {
        $scope.mytags.pop($scope.tag);       
    }
});