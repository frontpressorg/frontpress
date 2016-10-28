var module = angular.module("frontpress");

function frontpressConfig($interpolateProvider, $httpProvider, $urlRouterProvider, $locationProvider, BlogApiProvider, PostsApiProvider, $FrontpressProvider, $compileProvider){
    $interpolateProvider.startSymbol("{[{").endSymbol("}]}");
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $locationProvider.html5Mode(true);
    $FrontpressProvider.configure.load();
    
    $FrontpressProvider.configure.setTemplateUrl({
    	"views.home": "/js/views/home/templates/home.template.html",
    	"views.post": "/js/views/post/templates/post.template.html",
        "components.fullpost": "/js/components/full-post/templates/full-post.template.html",
        "components.fullpost.categories": "/js/components/full-post/templates/full-post-categories-list.template.html",
        "components.fullpost.tags": "/js/components/full-post/templates/full-post-tags-list.template.html",
        "components.listposts": "/js/components/list-posts/templates/list-posts.template.html",
        "components.pagehead": "/js/components/page-head/templates/page-head.template.html",
        "components.share": "/js/components/share/templates/share.template.html",
    });

    $compileProvider.debugInfoEnabled(false);
}

module.config(frontpressConfig);
