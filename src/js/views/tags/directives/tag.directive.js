"use strict";

function TagViewDirective($FrontPress){
    var directive = {
        scope: {},
        templateUrl: $FrontPress.getTemplateUrl("views.tag"),
        restrict: "AE",
        controllerAs: "vc",
        bindToController: true,
        controller: "TagDirectiveController",
        replace: true
    };
    return directive;
}

angular.module("frontpress.views.tag").directive("tagView", TagViewDirective);
TagViewDirective.$inject = ["$FrontPress"];
