angular.module("frontpress.views.post").config(configPost);

configPost.$inject = ["$stateProvider"];

function configPost($stateProvider){
    var statePost = {
        url: "/:postSlug",
        template: "<post-view></post-view>",
        controller: "PostRouteController as vc"
    };

    $stateProvider.state("post", statePost);
}
