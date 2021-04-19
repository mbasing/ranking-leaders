let app = angular.module("RankingLeadersApp", []);
app.controller("RankController",function($scope){

    $scope.showGold = false;
    $scope.showSilver = false;
    $scope.showBronze = false;

    $scope.toggleGold = function(){
        $scope.showGold = !$scope.showGold;
    }

    $scope.toggleSilver = function(){
        $scope.showSilver = !$scope.showSilver;
    }

    $scope.toggleBronze = function(){
        $scope.showBronze = !$scope.showBronze;
    }

    $scope.Leaders = [
        {"pic": "assets/1.png", "rank": 1},
        {"pic": "assets/2.png", "rank": 1},
        {"pic": "assets/3.png", "rank": 1},
        {"pic": "assets/4.png", "rank": 2},
        {"pic": "assets/5.png", "rank": 2},
        {"pic": "assets/6.png", "rank": 2},
        {"pic": "assets/7.png", "rank": 3},
        {"pic": "assets/8.png", "rank": 3},
        {"pic": "assets/9.png", "rank": 3},
    ];
});

