(function () {
    'use strict';

    angular.module('Tombola.NoughtsAndCrosses.Providers')
        .factory('GameModel',['$http', '$timeout', '$location', 'Proxy', 'Audio', function($http, $timeout, $location, proxy, audio) {
            var Model = function() {
                var me = this;

                me.currentGrid = [[{key: "0", value: "0"}, {key: "1", value: "0"}, {key: "2", value: "0"}],
                    [{key: "3", value: "0"}, {key: "4", value: "0"}, {key: "5", value: "0"}],
                    [{key: "6", value: "0"}, {key: "7", value: "0"}, {key: "8", value: "0"}]];

                me.playerTypes = [{name: "HUMAN", value: "human"}, {name: "EASY", value: "random"}, {
                    name: "HARD",
                    value: "pre-trained"
                }];
                me.player1Type = "";
                me.player2Type = "";

                me.playerCross = 1;
                me.playerNought = 2;
                me.player1Icon = "Crosses";

                me.gameOver = true; //possibly not actually used anywhere, but its set at the right times so might be useful
                me.showWinner = false;
                me.winnerText = "";

                me.isPlayerTypeValid = function(playerNum){
                    if(playerNum===1){
                        for (var i = 0; i < me.playerTypes.length; i++) {
                            if (me.playerTypes[i].value === me.player1Type) {
                                return true;
                            }
                        }
                    }
                    else if(playerNum===2){
                        for (var j = 0; j < me.playerTypes.length; j++) {
                            if (me.playerTypes[j].value === me.player2Type) {
                                return true;
                            }
                        }
                    }
                    return false;
                };

                me.setupBoard = function (player1Type, player2Type, player1Icon) {
                    if (player1Icon == "Crosses") {
                        me.playerCross = 1;
                        me.playerNought = 2;
                    }
                    else {
                        me.playerCross = 2;
                        me.playerNought = 1;
                    }

                    proxy.setupBoard({player1: player1Type, player2: player2Type})
                        .success(function (data, status, headers, config) {
                            $location.path("/game");
                            me.showWinner = false;
                            $timeout.cancel();
                            update(data);
                            audio.playButtonPress();
                        })
                        .error(function (data, status, headers, config) {
                            alert(data);
                        });

                    me.gameOver = false;
                };

                me.makeMove = function (choice) {
                    proxy.makeMove({"playerNumber": 1, "chosenSquare": choice})
                        .success(function (data, status, headers, config) {
                            update(data);
                            audio.playMove();
                        })
                        .error(function (data, status, headers, config) {
                            alert(data);
                        });
                };

                var update = function (data) {
                        me.currentGrid = boardToArray(data.gameboard);
                        if (data.outcome !== "Continue") {
                            endGame(data);
                        }
                        console.log(data.gameboard);
                        console.log(data.outcome);
                        console.log(data.winner);
                    },

                    boardToArray = function (board) {
                        var grid = me.currentGrid;
                        var maxRows = 3;
                        var maxCols = 3;
                        var k = 0;
                        for (var i = 0; i < maxRows; i++) {
                            for (var j = 0; j < maxCols; j++) {
                                grid[i][j].value = board[k];
                                k++;
                            }
                        }
                        return grid;
                    },

                    endGame = function(data) {
                        me.gameOver = true;
                        if (data.outcome === "Win") {
                            me.winnerText = "Player " + data.winner + " Wins!";
                        }
                        else {
                            me.winnerText = "Match is a Draw";
                        }
                        me.showWinner = true;
                        $timeout(hideWinners, 5000);
                        audio.playWin();
                    },

                    hideWinners = function() {
                        me.showWinner = false;
                    };
            };

            return new Model();
        }]);
})();