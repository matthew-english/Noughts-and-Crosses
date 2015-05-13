(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers.Proxy')
        .service('Proxy',['$http','ProxyConstants', function($http, ProxyConstants) {
            var Proxy = function() {
                var constant = ProxyConstants;
                var me = this;

                me.setupBoard = function (msg) {
                    return post(constant.newGameURL, msg);
                };

                me.makeMove = function (msg) {
                    return post(constant.moveURL, msg);
                };

                var post = function(url, msg) {
                    return $http.post(url, msg, {withCredentials: true});
                };
            };

            return new Proxy();
        }]);
})();