var module = angular.module("frontpress");

function FrontPressConfig($interpolateProvider, $httpProvider, $urlRouterProvider, $locationProvider, BlogApiProvider, PostsApiProvider, $FrontPressProvider, $compileProvider){
    $interpolateProvider.startSymbol("{[{").endSymbol("}]}");
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $locationProvider.html5Mode(true);
    $FrontPressProvider.configure.load();    
    $compileProvider.debugInfoEnabled(false);
}

module.config(FrontPressConfig);
