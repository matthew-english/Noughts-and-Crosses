(function() {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Filters', []);
    angular.module('Tombola.NoughtsAndCrosses.Providers.Proxy', []);
    angular.module('Tombola.NoughtsAndCrosses.Providers', ['Tombola.NoughtsAndCrosses.Providers.Proxy']);
    angular.module('Tombola.NoughtsAndCrosses', ['ngRoute', 'ngAnimate', 'Tombola.NoughtsAndCrosses.Filters', 'Tombola.NoughtsAndCrosses.Providers']);
}());