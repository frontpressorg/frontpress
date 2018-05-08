"use strict";

function AjaxModel($http) {
    function request(url, params, method) {
        params = params || {};

        var promise = $http({
            url: url,
            method: method,
            params: params,
            cache: true
        });

        return promise;
    }

    function get(url, params) {
        return request(url, params, "GET");
    }

    function post(url, params) {
        return request(url, params, "POST");
    }

    function put(url, params) {
        return request(url, params, "PUT");
    }

    return {
        get: get,
        post: post,
        put: put,
    };
}

angular.module("frontpress.components.ajax").factory("AjaxModel", AjaxModel);
AjaxModel.$inject = ["$http"];

