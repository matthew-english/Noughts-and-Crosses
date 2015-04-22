(function() {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('MainController', function ($scope, $location, $http) {

            $scope.currentGrid = [0,0,0,0,0,0,0,0,0];

            $scope.player1Type = "human";
            $scope.player2Type = "random";

            $scope.settings = function () {
                console.log("found you");
                $location.path("/settings");
            };

            $scope.setupBoard = function (player1Type, player2Type) {

                $http.post("http://noughtsandcrosses:35000/api/v1.0/newgame", {player1: player1Type, player2: player2Type}, {withCredentials: true})
                    .success(function (data, status, headers, config) {
                        $scope.currentGrid = data.gameboard;
                    })
                    .error(function (data, status, headers, config) {
                        alert(data);
                    });

                $location.path("/game");
            };

            $scope.makeMove = function (choice) {

                $http.post("http://noughtsandcrosses:35000/api/v1.0/makemove", {"playerNumber": 1, "chosenSquare": choice}, {withCredentials: true})
                    .success(function (data, status, headers, config) {
                        $scope.currentGrid = data.gameboard;
                        console.log(data.gameboard);
                        console.log(data.outcome);
                        console.log(data.winner);
                    })
                    .error(function (data, status, headers, config) {
                        alert(data);
                    });
            };
        });
}());