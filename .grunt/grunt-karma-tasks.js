(function () {
    'use strict';

    module.exports = {
        unit:{
            configFile: 'karma.conf.js',
            options: {
                files: [
                    './bower_components/angular/angular.js',
                    './bower_components/angular-mocks/angular-mocks.js',
                    './main-app/app/scripts/modules.js',
                    './main-app/app/scripts/controllers/*.js',
                    './main-app/app/scripts/providers/**/*.js',
                    './main-app/app/scripts/filters/*.js',
                    './main-app/app/scripts/config/*.js',
                    './main-app/tests/unit-tests/**/*.js']
            }
        }
    };
})();