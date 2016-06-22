(function(){
    'use strict';

    angular.module("ngpress").config(ngpressConfig);

    function ngpressConfig($interpolateProvider, $httpProvider, $urlRouterProvider, $locationProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $locationProvider.html5Mode(true);
    }

})();

