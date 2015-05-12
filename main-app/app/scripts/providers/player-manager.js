(function () {
    'use strict';

    angular.module('Tombola.NoughtsAndCrosses.Providers')
        .service('PlayerManager',[function() {

            var me = this;

            me.playerTypes = {HUMAN: "human", EASY: "random", HARD: "pre-trained"};

            me.player1Type = "";
            me.player2Type = "";

            me.playerCross = 1;
            me.playerNought = 2;
            me.player1Icon = "Crosses";

            me.playerCross = 1;
            me.playerNought = 2;
            me.player1Icon = "Crosses";

            me.playerTurn = 1;
            me.playersBothHuman = false;

            me.setIcons = function() {
                if (me.player1Icon == "Crosses") {
                    me.playerCross = 1;
                    me.playerNought = 2;
                }
                else {
                    me.playerCross = 2;
                    me.playerNought = 1;
                }
            };

            me.canPlay = function () {
                if (me.isPlayerTypeValid(1)) {
                    if (me.isPlayerTypeValid(2)) {
                        return true;
                    }
                }
                return false;
            };

            me.isPlayerTypeValid = function (playerNum) {
                var type = "";

                if (playerNum === 1) {
                    for (type in me.playerTypes) {
                        if (me.playerTypes[type] === me.player1Type) {
                            return true;
                        }
                    }
                }
                else if (playerNum === 2) {
                    for (type in me.playerTypes) {
                        if (me.playerTypes[type] === me.player2Type) {
                            return true;
                        }
                    }
                }
                return false;
            };

            me.checkPlayerTurn = function() {
                me.playersBothHuman = false;
                if(me.player1Type === me.playerTypes.HUMAN) {
                    if((me.player2Type === me.playerTypes.HUMAN)) {
                        me.playersBothHuman = true;
                    }
                    me.playerTurn = 1;
                }
                else if(me.player2Type === me.playerTypes.HUMAN) {
                    me.playerTurn = 2;
                }
            };

            me.togglePlayerTurn = function() {
                me.playerTurn += 1;
                if(me.playerTurn > 2) {
                    me.playerTurn = 1;
                }
            };
        }]);
})();