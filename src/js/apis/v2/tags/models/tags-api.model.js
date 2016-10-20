angular.module('frontpress.apis.categories').factory('TagsApi', TagsApi);

TagsApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

function TagsApi(AjaxModel, $Frontpress, ConfigsToParams){
    var tagsBaseUrl = $Frontpress.restApiUrl + '/wp/v2/tags/';

    var restApi = {
        getAllTags: getAllTags,
        getTagById: getTagById,
    };

    return restApi;

    function getAllTags(configs){
        var tagsListUrl = tagsBaseUrl;
        var params = ConfigsToParams.parse(configs);
        return AjaxModel.get(tagsListUrl, params);
    }

    function getTagById(tagId, configs){
        var tagUrl = tagsBaseUrl + '<tag-id>';
        tagUrl = tagUrl.replace('<tag-id>', tagId);
        return AjaxModel.get(tagUrl, configs);
    }
}
