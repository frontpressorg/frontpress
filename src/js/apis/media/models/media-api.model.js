angular.module('frontpress.apis.posts').factory('MediaApi', MediaApi);

MediaApi.$inject = ['AjaxModel', '$Frontpress'];

function MediaApi(AjaxModel, $Frontpress){
    var mediaBaseUrl = $Frontpress.restApiUrl + '/media/';
    var postsBaseUrl = $Frontpress.restApiUrl + '/posts/';

    var restApi = {
        getPostThumbnailByPostId: getPostThumbnailByPostId
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

    function getPostThumbnailByPostId(postId){
        var postUrl = postsBaseUrl + '<post-id>?fields=post_thumbnail';
        postUrl = postUrl.replace('<post-id>', postId);
        return AjaxModel.get(postUrl, configs);        
    }
}
