(function(){
    'use strict';

    angular.module('ngpress.components.ajax').factory('Ajax', function($http){

        var model = {
            get: get,
            post: post,
            put: put,
        };

        return model;

        function get(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: 'GET',
                url: url,
                params: params
            });
            return promise;
        }

        function post(url, params){
            if(!params){
                params = {};
            }
            var promise = $http({
                method: 'POST',
                url: url,
                data: params
            });
            return promise;
        }

        function put(url, params){
            if(!params){
                params = {};
            }

            var promise = $http({
                method: 'PUT',
                url: url,
                data: params
            });
            return promise;
        }
    });
})();