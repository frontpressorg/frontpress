angular.module("frontpress.views.home").config(configHome);

configHome.$inject = ["$stateProvider", "$urlRouterProvider", "$FrontPressProvider"];

function configHome($stateProvider, $urlRouterProvider, $FrontPressProvider){

    $FrontPressProvider.configure.loadRoutes();

    var stateHome = {
        url: $FrontPressProvider.getRoute("home"),
        template: "<home-view></home-view>",
        controller: "HomeRouteController as vc"
    };

    var stateHomePagination = {
        url: $FrontPressProvider.getRoute("home.pagination"),
        template: "<home-view></home-view>",
        controller: "HomeRouteController as vc"
    };

    $stateProvider.state("home", stateHome);
    $stateProvider.state("home-pagination", stateHomePagination);
}
