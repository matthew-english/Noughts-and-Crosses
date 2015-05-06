(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Filters')
        .filter('cell', function() {
            return function(input) {
                if(input.playerNum == input.crossPlayer){
                    return 'image cross';
                }
                else if (input.playerNum == input.noughtPlayer){
                    return 'image nought';
                }
            };
        });
})();