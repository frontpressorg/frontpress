"use strict";

function FullPostContentDirective($FrontPress){
	var directive = {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $FrontPress.getTemplateUrl("components.fullpost.content"),
		controller: "FullPostGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}

angular.module("frontpress.components.full-post").directive("fullPostContent", FullPostContentDirective);
FullPostContentDirective.$inject = ["$FrontPress"];
