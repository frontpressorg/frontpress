(function(){
    'use strict';

    angular.module("frontpress").config(frontpressConfig);

    function frontpressConfig($interpolateProvider, $httpProvider, $urlRouterProvider, $locationProvider, BlogApiProvider, PostsApiProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $locationProvider.html5Mode(true);
        PostsApiProvider.configure.setWordpressBaseUrl("https://public-api.wordpress.com/rest/v1.1/sites/efeitoecausa.wordpress.com");
        BlogApiProvider.configure.setWordpressBaseUrl("https://public-api.wordpress.com/rest/v1.1/sites/efeitoecausa.wordpress.com");
    }

})();

