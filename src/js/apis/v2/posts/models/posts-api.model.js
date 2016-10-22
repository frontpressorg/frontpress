var module = angular.module('frontpress.apis.posts');

function PostsApi(AjaxModel, $Frontpress, ConfigsToParams){
    var postsBaseUrl = $Frontpress.restApiUrl + '/wp/v2/posts/';

    function getAllPosts(configs){
        var postsListUrl = postsBaseUrl+'?_envelope';
        var params = ConfigsToParams.parse(configs);

        return AjaxModel.get(postsListUrl, params);
    }

    function getPostBySlug(postSlug, configs){
        var postUrl = postsBaseUrl + 'slug:<post-slug>';
        postUrl = postUrl.replace('<post-slug>', postSlug);

        return AjaxModel.get(postUrl, configs);
    }

    function getPostById(postId, configs){
        var postUrl = postsBaseUrl + '<post-id>';
        postUrl = postUrl.replace('<post-id>', postId);

        return AjaxModel.get(postUrl, configs);
    }

    return {
        getAllPosts: getAllPosts,
        getPostBySlug: getPostBySlug,
        getPostById: getPostById
    };
}

PostsApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

module.factory('PostsApi', PostsApi);
