"use strict";

function CategoryViewDirective($FrontPress){
    var directive = {
        scope: {},
        templateUrl: $FrontPress.getTemplateUrl("views.category"),
        restrict: "AE",
        controllerAs: "vc",
        bindToController: true,
        controller: "CategoryDirectiveController",
        replace: true
    };
    return directive;
}

angular.module("frontpress.views.category").directive("categoryView", CategoryViewDirective);
CategoryViewDirective.$inject = ["$FrontPress"];
