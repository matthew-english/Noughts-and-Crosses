(function() {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('MainController', ['$scope', '$location', 'GameModel', 'Audio', function ($scope, $location, GameModel, audio) {

            $scope.model = GameModel;

            $scope.settings = function () {
                $location.path("/settings");
                audio.playButtonPress();
            };
        }]);
}());