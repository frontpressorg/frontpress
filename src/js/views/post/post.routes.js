angular.module("frontpress.views.post").config(configPost);

configPost.$inject = ["$stateProvider", "$FrontPressProvider"];

function configPost($stateProvider, $FrontPressProvider){
	$FrontPressProvider.configure.loadRoutes();

    var statePost = {
        url: $FrontPressProvider.getRoute("post"),
        url: ":postSlug",
        template: "<post-view></post-view>",
        controller: "PostRouteController as vc"
    };

    $stateProvider.state("post", statePost);
}
