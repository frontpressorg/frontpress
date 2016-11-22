var module = angular.module("frontpress.apis.media");

function MediaApi(AjaxModel, $FrontPress, ConfigsToParams){
    var mediaBaseUrl = $FrontPress.restApiUrl + "/wp/v2/media/";

    function getMediaById(mediaId, configs){
        var mediaUrl = mediaBaseUrl + "<media-id>";
        mediaUrl = mediaUrl.replace("<media-id>", mediaId);

        return AjaxModel.get(mediaUrl, configs);
    }

    return {
        getMediaById: getMediaById
    };
}

MediaApi.$inject = ["AjaxModel", "$FrontPress", "ConfigsToParams"];

module.factory("MediaApi", MediaApi);
