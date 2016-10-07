angular.module('frontpress.apis.categories').factory('TagsApi', TagsApi);

TagsApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

function TagsApi(AjaxModel, $Frontpress, ConfigsToParams){
    var tagsBaseUrl = $Frontpress.restApiUrl + '/wp/v2/posts/';

    var restApi = {
        getAllTags: getAllTags,
        getTagByPostId: getTagByPostId,
    };

    return restApi;

    function getAllTags(configs){
        var tagsListUrl = tagsBaseUrl;
        var params = ConfigsToParams.parse(configs);
        return AjaxModel.get(tagsListUrl, params);
    }

    function getTagByPostId(postId, configs){
        var postUrl = tagsBaseUrl + '<post-id>?fields=tags';
        var params = ConfigsToParams.parse(configs);
        postUrl = postUrl.replace('<post-id>', postId);
        return AjaxModel.get(postUrl, params);
    }    
}
