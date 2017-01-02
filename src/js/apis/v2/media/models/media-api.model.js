"use strict";

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

angular.module("frontpress.apis.media").factory("MediaApi", MediaApi);
MediaApi.$inject = ["AjaxModel", "$FrontPress", "ConfigsToParams"];

