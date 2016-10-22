var module = angular.module('frontpress.apis.media');

function MediaApi(AjaxModel, $Frontpress, ConfigsToParams){
    var mediaBaseUrl = $Frontpress.restApiUrl + '/wp/v2/media/';

    function getMediaById(mediaId, configs){
        var mediaUrl = mediaBaseUrl + '<media-id>';
        mediaUrl = mediaUrl.replace('<media-id>', mediaId);

        return AjaxModel.get(mediaUrl, configs);
    }

    return {
        getMediaById: getMediaById
    };
}

MediaApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

module.factory('MediaApi', MediaApi);
