(function() {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/game', {
                    templateUrl: 'partials/game.html'
                }).
                when('/settings', {
                    templateUrl: 'partials/settings.html'
                }).
                when('/main', {
                    templateUrl: 'partials/main.html'
                }).
                otherwise({
                    redirectTo: '/main'
                });
        }]);
}());
