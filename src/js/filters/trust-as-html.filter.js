"use strict";

function TrustAsHtml($sce){
    function filter(text){
        return $sce.trustAsHtml(text);
    }

    return filter;
}

angular.module("frontpress.filters").filter("trustAsHtml", TrustAsHtml);
TrustAsHtml.$inject = ["$sce"];
