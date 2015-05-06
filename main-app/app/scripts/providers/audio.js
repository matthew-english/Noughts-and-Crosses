(function () {
    'use strict';

    angular.module('Tombola.NoughtsAndCrosses.Providers')
        .service('Audio', function () {
            var audio = {};

            var move = new Audio('resources/sounds/blopMark.mp3');
            var button = new Audio('resources/sounds/spinJump.mp3');
            var win = new Audio('resources/sounds/shootingStar.mp3');

            audio.playWin = function() {
                win.play();
            };

            audio.playButtonPress = function() {
                button.play();
            };

            audio.playMove = function() {
                move.play();
            };

            return audio;
        });
})();