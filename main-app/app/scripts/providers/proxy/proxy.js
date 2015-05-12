(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses.Providers.Proxy')
        .service('Proxy',['$http','ProxyConstants', function($http, ProxyConstants) {
            var Proxy = function() {
                var constant = ProxyConstants;
                var me = this;

                me.setupBoard = function (msg) {
                    return post(constant.newGameURL, msg, {withCredentials: true});
                };

                me.makeMove = function (msg) {
                    return post(constant.moveURL, msg, {withCredentials: true});
                };

                var post = function(url, msg, add) {
                    return $http.post(url, msg, add);
                };
            };

            return new Proxy();
        }]);
})();