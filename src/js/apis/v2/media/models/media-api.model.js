angular.module('frontpress.apis.media').factory('MediaApi', MediaApi);

MediaApi.$inject = ['AjaxModel', '$Frontpress', 'ConfigsToParams'];

function MediaApi(AjaxModel, $Frontpress, ConfigsToParams){
    var mediaBaseUrl = $Frontpress.restApiUrl + '/wp/v2/media/';

    var restApi = {
        getMediaById: getMediaById
    };

    return restApi;

    function getMediaById(mediaId, configs){
        var mediaUrl = mediaBaseUrl + '<media-id>';
        mediaUrl = mediaUrl.replace('<media-id>', mediaId);
        return AjaxModel.get(mediaUrl, configs);
    }
}
