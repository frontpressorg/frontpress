(function(){
    'use strict';

    angular.module('frontpress.components.ajax').factory('AjaxModel', AjaxModel);

    function AjaxModel($http) {

        var model = {
            get: get,
            post: post,
            put: put,
        };

        function get(url, params) {
            return request(url, params, 'GET');
        }

        function post(url, params) {
            return request(url, params, 'POST');
        }

        function put(url, params) {
            return request(url, params, 'PUT');
        }

        function request(url, params, method) {
            params = params || {};

            var promise = $http({
                url: url,
                method: method,
                params: params
            });

            return promise;
        }

        return model;
    }

})();

