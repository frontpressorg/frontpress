var module = angular.module("frontpress.components.ajax");

function AjaxModel($http) {
    function request(url, params, method) {
        params = params || {};

        var promise = $http({
            url: url,
            method: method,
            params: params
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

module.factory("AjaxModel", AjaxModel);
