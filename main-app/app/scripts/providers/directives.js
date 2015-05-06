(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers')
        .directive('gameCell', function() {
            return{
                restrict: 'E',
                template: '<button ng-class="{playerNum: col.value, crossPlayer: model.playerCross, noughtPlayer: model.playerNought} | cell" ng-disabled="col.value>0 || model.gameOver" ng-click="makeMove(col.key)"></button>'
            };
        });
})();