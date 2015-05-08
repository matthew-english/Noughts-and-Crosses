(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers.Proxy')
        .constant('ProxyConstants', {
            newGameURL: "http://noughtsandcrosses:35000/api/v1.0/newgame",
            moveURL: "http://noughtsandcrosses:35000/api/v1.0/makemove"
        });
})();