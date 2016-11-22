var module = angular.module("frontpress.apis.categories");

function TagsApi(AjaxModel, $FrontPress, ConfigsToParams){
    var tagsBaseUrl = $FrontPress.restApiUrl + "/wp/v2/tags/";

    function getAllTags(configs){
        var tagsListUrl = tagsBaseUrl;
        var params = ConfigsToParams.parse(configs);

        return AjaxModel.get(tagsListUrl, params);
    }

    function getTagById(tagId, configs){
        var tagUrl = tagsBaseUrl + "<tag-id>";
        tagUrl = tagUrl.replace("<tag-id>", tagId);

        return AjaxModel.get(tagUrl, configs);
    }

    return {
        getAllTags: getAllTags,
        getTagById: getTagById,
    };
}

TagsApi.$inject = ["AjaxModel", "$FrontPress", "ConfigsToParams"];

module.factory("TagsApi", TagsApi);
