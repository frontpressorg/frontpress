"use strict";

function BlogApi(AjaxModel, $FrontPress) {
    var baseUrl = $FrontPress.restApiUrl;

    var restApi = {
        getBlogInformation: getBlogInformation,
    };

    return restApi;

    function getBlogInformation() {
        return AjaxModel.get(baseUrl);
    }
}

angular.module("frontpress.apis.blog").factory("BlogApi", BlogApi);
BlogApi.$inject = ["AjaxModel", "$FrontPress"];

