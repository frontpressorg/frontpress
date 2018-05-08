"use strict";

function Share($FrontPress) {
    var directive = {
        restrict: "AE",
        scope: {
            post: "=post",
        },
        templateUrl: $FrontPress.getTemplateUrl("components.share"),
        controller: "ShareController",
        controllerAs: "vc",
        bindToController: true,
        replace: true
    };

    return directive;
}

angular.module("frontpress.components.share").directive("share", Share);
Share.$inject = ["$FrontPress"];
