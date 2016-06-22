(function(){
    'use strict';

    angular.module("ngpress").config(ngpressConfig);

    function ngpressConfig($interpolateProvider, $httpProvider, $urlRouterProvider, $locationProvider, PostsApiProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $locationProvider.html5Mode(true);
        PostsApiProvider.configure.setWordpressBaseUrl("https://www.vivadecora.com.br/revista/wp-json/wp/v2");
    }

})();

