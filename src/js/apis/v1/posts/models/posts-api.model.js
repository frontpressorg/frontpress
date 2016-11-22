angular.module("frontpress.apis.posts").factory("PostsApi", PostsApi);

PostsApi.$inject = ["AjaxModel", "$FrontPress", "ConfigsToParams"];

function PostsApi(AjaxModel, $FrontPress, ConfigsToParams){
    var postsBaseUrl = $FrontPress.restApiUrl + "/posts/";

    var restApi = {
        getAllPosts: getAllPosts,
        getPostBySlug: getPostBySlug,
        getPostById: getPostById
    };

    return restApi;

    function getAllPosts(configs){
        var postsListUrl = postsBaseUrl;
        var params = ConfigsToParams.parse(configs);
        return AjaxModel.get(postsListUrl, params);
    }

    function getPostBySlug(postSlug, configs){
        var postUrl = postsBaseUrl + "slug:<post-slug>";
        postUrl = postUrl.replace("<post-slug>", postSlug);
        return AjaxModel.get(postUrl, configs);
    }

    function getPostById(postId, configs){
        var postUrl = postsBaseUrl + "<post-id>";
        postUrl = postUrl.replace("<post-id>", postId);
        return AjaxModel.get(postUrl, configs);
    }    
}
