(function() {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('MainController', ['$scope', '$location', 'GameModel', 'Audio', function ($scope, $location, GameModel, Audio) {

            $scope.model = GameModel;
            var audio = Audio;
            var numThemes = 3;

            $scope.currentTheme = 1; //standard theme

            $scope.changeTheme = function(){
                $scope.currentTheme += 1;
                if($scope.currentTheme > (numThemes)){
                    $scope.currentTheme = 1;
                }
            };

            $scope.settings = function () {
                $location.path("/settings");
                audio.playButtonPress();
            };

            $scope.startGame = function(player1Type, player2Type, player1Icon) {
                $scope.model.setupBoard(player1Type, player2Type, player1Icon);
            };

            $scope.makeMove = function (choice) {
                $scope.model.makeMove(choice);
            };
        }]);
}());