"use strict";

function PostViewDirective($FrontPress){
    var directive = {
        scope: {},
        templateUrl: $FrontPress.getTemplateUrl("views.post"),
        restrict: "AE",
        controllerAs: "vc",
        bindToController: true,
        controller: "PostDirectiveController",
        replace: true
    };
    return directive;
}

angular.module("frontpress.views.post").directive("postView", PostViewDirective);
PostViewDirective.$inject = ["$FrontPress"];
