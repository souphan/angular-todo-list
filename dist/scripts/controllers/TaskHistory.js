<div ng-controller="AlbumCtrl">
{{counter}}
    <button ng-click="reset()">Reset</button>    
</div>

function AlbumCtrl($scope,$timeout) {
    $scope.counter = 100;
    $scope.onTimeout = function(){
        $scope.counter--;
        if ($scope.counter > 0) {
            mytimeout = $timeout($scope.onTimeout,1000);
        }
        else {
            alert("Time is up!");
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
    
    $scope.reset= function(){
        $scope.counter = 100;
        mytimeout = $timeout($scope.onTimeout,1000);
    }
            
}
