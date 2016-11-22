var module = angular.module("frontpress.apis.media");

function MediaApi(AjaxModel, $FrontPress, ConfigsToParams){
    var mediaBaseUrl = $FrontPress.restApiUrl + "/media/";
    var postsBaseUrl = $FrontPress.restApiUrl + "/posts/";

    function getPostThumbnailByPostId(postId, configs){
        var postUrl = postsBaseUrl + "<post-id>?fields=post_thumbnail";
        postUrl = postUrl.replace("<post-id>", postId);
        var params = ConfigsToParams.parse(configs);
        return AjaxModel.get(postUrl, params);
    }

    return {
        getPostThumbnailByPostId: getPostThumbnailByPostId,
    };
}

MediaApi.$inject = ["AjaxModel", "$FrontPress", "ConfigsToParams"];

module.factory("MediaApi", MediaApi);
