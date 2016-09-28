angular.module('frontpress.apis.media').factory('MediaApi', MediaApi);

MediaApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

function MediaApi(AjaxModel, $Frontpress, ConfigsToParams){
    var mediaBaseUrl = $Frontpress.restApiUrl + '/media/';
    var postsBaseUrl = $Frontpress.restApiUrl + '/posts/';

    var restApi = {
        getPostThumbnailByPostId: getPostThumbnailByPostId,
    };

    return restApi;

    function getPostThumbnailByPostId(postId, configs){
        var postUrl = postsBaseUrl + '<post-id>?fields=post_thumbnail';
        postUrl = postUrl.replace('<post-id>', postId);
        var params = ConfigsToParams.parse(configs);
        return AjaxModel.get(postUrl, params);        
    }
}
