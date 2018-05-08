"use strict";

function ApiManager(ApiManagerMap){
    var service = {
        getPath: getPath
    };

    return service;

    function getPath(object, pathName){
        var result = object;
        var path = ApiManagerMap[pathName];

        for(var i=0; i < path.length; i++){
            result = result[path[i]];
        }

        return result;
    }
}

angular.module("frontpress.components.api-manager").service("ApiManager", ApiManager);
ApiManager.$inject = ["ApiManagerMap"];
