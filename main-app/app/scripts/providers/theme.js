(function () {
    'use strict';

    angular.module('Tombola.NoughtsAndCrosses.Providers')
        .service('Theme', function () {
            var Theme = function(){
                var me = this;

                var totalThemes = 3; // constant, could be moved elsewhere
                me.currentTheme="theme-1";
                var currentThemeNum = 1;
                me.changeTheme = function(){
                    currentThemeNum += 1;
                    me.currentTheme = "theme-" + currentThemeNum;
                    if(currentThemeNum > (totalThemes)){
                        currentThemeNum = 1;
                        me.currentTheme = "theme-" + currentThemeNum;
                    }
                };
            };

            return new Theme();
        });
})();