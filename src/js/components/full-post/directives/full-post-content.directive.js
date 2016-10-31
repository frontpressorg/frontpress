var module = angular.module("frontpress.components.full-post");

function FullPostContentDirective($Frontpress){
	var directive = {
		restrict: "E",
		scope: {
			post: "=post"
		},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost.content"),
		controller: "FullPostGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}

module.directive("fullPostContent", FullPostContentDirective);
