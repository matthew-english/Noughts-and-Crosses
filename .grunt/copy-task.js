(function(){
    'use strict';

    module.exports = {
            html:{
                cwd:'',
                    src: ['main-app/app/**/*.html'],
                    dest: '.build/',
                    expand: true
            },
            bowerComponents:{
                cwd:'bower_components',
                    src: ['**/*.*'],
                    dest: '.build/main-app/thirdparty',
                    expand: true
            },
            resources:{
                cwd:'',
                    src: ['main-app/app/resources/**/*.*'],
                    dest: '.build/',
                    expand: true
            },
            views:{},
            images:{
                cwd:'',
                    src: ['main-app/app/images/*.*'],
                    dest: '.build/',
                    expand: true
            }
        };
}());
