(function() {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('MainController', function ($scope, $location, $http, $timeout) {

            $scope.currentGrid = "000000000";

            $scope.player1Type = "human";
            $scope.player2Type = "random";

            $scope.playerCross = 1;
            $scope.playerNought = 2;
            $scope.player1Icon = "Crosses";

            $scope.gameOver = true;
            $scope.showWinner = false;
            $scope.winnerText = "";

            $scope.settings = function () {
                $location.path("/settings");
            };

            $scope.setupBoard = function (player1Type, player2Type, player1Icon) {
                if(player1Icon == "Crosses") {
                    $scope.playerCross = 1;
                    $scope.playerNought = 2;
                }
                else {
                    $scope.playerCross = 2;
                    $scope.playerNought = 1;
                }

                post("http://noughtsandcrosses:35000/api/v1.0/newgame", {player1: player1Type, player2: player2Type}, {withCredentials: true});

                $location.path("/game");
                $scope.gameOver = false;
            };

            $scope.makeMove = function (choice) {
                post("http://noughtsandcrosses:35000/api/v1.0/makemove", {"playerNumber": 1, "chosenSquare": choice}, {withCredentials: true});
            };

            function post(url, msg, add) {
                $http.post(url, msg, add)
                    .success(function (data, status, headers, config) {
                        $scope.currentGrid = data.gameboard;
                        if(data.outcome !== "Continue") {
                            endGame(data);
                        }
                        console.log(data.gameboard);
                        console.log(data.outcome);
                        console.log(data.winner);
                    })
                    .error(function (data, status, headers, config) {
                        alert(data);
                    });
            }

            var endGame = function(data) {
                $scope.gameOver = true;
                if (data.outcome === "Win") {
                    $scope.winnerText = "Player " + data.winner + " Wins!";
                }
                else{
                    $scope.winnerText = "Match is a Draw";
                }
                $scope.showWinner = true;
                $timeout(hideWinners, 5000);
            };

            function hideWinners() {
                $scope.showWinner = false;
            }
        });
}());