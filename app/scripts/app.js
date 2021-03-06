'use strict';

angular .module('hypheedWebstubApp', ['ui.router', 'ngResource'])
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('app', {
                    url: '/',
                    views: {
                        'header': {
                            templateUrl : 'views/header.html',
                        },
                        'content': {
                            templateUrl : 'views/feed.html'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        });
