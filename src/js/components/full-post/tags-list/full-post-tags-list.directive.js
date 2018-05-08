"use strict";

function FullPostTagListDirective($FrontPress){
	var directive = {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $FrontPress.getTemplateUrl("components.fullpost.tags"),
		controller: "FullPostTagsListDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}

angular.module("frontpress.components.full-post").directive("fullPostTagsList", FullPostTagListDirective);
FullPostTagListDirective.$inject = ["$FrontPress"];
