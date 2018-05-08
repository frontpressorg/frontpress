"use strict";

function PostDateDirective($FrontPress){
    var directive = {
        restrict: "AE",
        scope: {
            post: '=post'
        },
        replace: true,
        templateUrl: $FrontPress.getTemplateUrl("components.postdate"),
        controller: "PostDateDirectiveController",
        controllerAs: "vc",
        bindToController: true
    };

    return directive;
}

angular.module("frontpress.components.post-date").directive("postDate", PostDateDirective);
PostDateDirective.$inject = ["$FrontPress"];
