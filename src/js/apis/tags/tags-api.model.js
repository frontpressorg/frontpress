angular.module('frontpress.apis.tags').factory('TagsApi', TagsApi);

TagsApi.$inject = ['AjaxModel', '$Frontpress'];

function TagsApi(AjaxModel, $Frontpress){
    var tagsBaseUrl = $Frontpress.restApiUrl + '/posts/';

    var restApi = {
        getAllTags: getAllTags,
        getTagByPostId: getTagByPostId,
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

    function getAllTags(configs){
        var tagsListUrl = tagsBaseUrl;
        var params = _parseConfigsToParams(configs);
        return AjaxModel.get(tagsListUrl, params);
    }

    function getTagByPostId(postId, configs){
        var postUrl = tagsBaseUrl + '<post-id>?fields=tags';
        postUrl = postUrl.replace('<post-id>', postId);
        return AjaxModel.get(postUrl, configs);
    }    
}
