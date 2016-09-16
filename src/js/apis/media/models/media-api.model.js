angular.module('frontpress.apis.media').factory('MediaApi', MediaApi);

MediaApi.$inject = ['AjaxModel', '$Frontpress'];

function MediaApi(AjaxModel, $Frontpress){
    var mediaBaseUrl = $Frontpress.restApiUrl + '/media/';
    var postsBaseUrl = $Frontpress.restApiUrl + '/posts/';

    var restApi = {
        getPostThumbnailByPostId: getPostThumbnailByPostId,
        getMediaById: getMediaById
    };

    return restApi;

    function _parseConfigsToParams(configs){
        var params = {};

        if(configs){
            if(configs.pageSize) params.number = parseInt(configs.pageSize);
            if(configs.pageNumber) params.page = parseInt(configs.pageNumber);
            if(configs.context) params.context = configs.context;
            if(configs.fields) params.fields = configs.fields;
        }
        return params;
    }

    function getPostThumbnailByPostId(postId, configs){
        var postUrl = postsBaseUrl + '<post-id>?fields=post_thumbnail';
        postUrl = postUrl.replace('<post-id>', postId);
        return AjaxModel.get(postUrl, configs);        
    }

    function getMediaById(mediaId, configs){
        var mediaEndpoint = mediaBaseUrl + '<media_id>';
        var mediaEndpoint = "https://www.vivadecora.com.br/revista/wp-json/wp/v2/media/"+mediaId // teste;
        mediaEndpoint = mediaEndpoint.replace('<media_id>', mediaId);
        return AjaxModel.get(mediaEndpoint);
    }
}
