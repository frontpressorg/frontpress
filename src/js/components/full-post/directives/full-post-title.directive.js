var module = angular.module("frontpress.components.full-post");

function FullPostTitleDirective($FrontPress){
	var directive = {
		restrict: "AE",
		scope: {
			post: "=post"
		},
		templateUrl: $FrontPress.getTemplateUrl("components.fullpost.title"),
		controller: "FullPostGenericDirectiveController",
		controllerAs: "vc",
		bindToController: true,
		replace: true
	};

	return directive;
}

module.directive("fullPostTitle", FullPostTitleDirective);
FullPostTitleDirective.$inject = ["$FrontPress"];
