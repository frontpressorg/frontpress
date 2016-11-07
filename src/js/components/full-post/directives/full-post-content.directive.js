var module = angular.module("frontpress.components.full-post");

function FullPostContentDirective($Frontpress){
	var directive = {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost.content"),
		controller: "FullPostGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}

module.directive("fullPostContent", FullPostContentDirective);
