(function () {
    'use strict';

    angular.module('Tombola.NoughtsAndCrosses.Providers')
        .service('Audio', function () {
            var MyAudio = function(){
                var me = this;

                var move = new Audio('resources/sounds/blopMark.mp3');
                var button = new Audio('resources/sounds/spinJump.mp3');
                var win = new Audio('resources/sounds/shootingStar.mp3');

                me.playWin = function () {
                    win.play();
                };

                me.playButtonPress = function () {
                    button.play();
                };

                me.playMove = function () {
                    move.play();
                };
            };

            return new MyAudio();
        });
})();