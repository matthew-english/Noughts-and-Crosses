(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers')
        .service('Proxy', function($http, ProxyConstants) {
            var proxy = {};
            var constant = ProxyConstants;

            proxy.setupBoard = function (msg) {
                return post(constant.newGameURL, msg, {withCredentials: true});
            };

            proxy.makeMove = function (msg) {
                return post(constant.moveURL, msg, {withCredentials: true});
            };

            function post(url, msg, add) {
                return $http.post(url, msg, add);
            }

            return proxy;
        });
})();