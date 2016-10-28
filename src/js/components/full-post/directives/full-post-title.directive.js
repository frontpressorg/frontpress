var module = angular.module("frontpress.components.full-post");

function FullPostTitleDirective($Frontpress){
	var directive = {
		restrict: "E",
		scope: {
			post: "=post"
		},
		templateUrl: $Frontpress.getTemplateUrl("components.fullpost.title"),
		controller: "FullPostGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true
	};

	return directive;
}

module.directive("fullPostTitle", FullPostTitleDirective);
